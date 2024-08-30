---
title: 基于xmake的C++依赖管理
date: 2024-08-07T23:19:44+08:00
math: false
toc: true
tags: [工程管理、cpp、xmake]
categories: [软件工程]

---

## 我的环境

- Windows 10+
- xmake v2.9.4
- visual studio 2022
  
## 为什么需要相对统一的包管理

首先是，受限于C++  ABI的问题，相同编译器的不同版本编译的产生的结果不同，因而无法直接使用。其次，由于C++对于第三方库缺少统一的依赖标准，事实上CMake是当前生产环境的主流标准，但是仍然有相当多的库使用自己的构建系统或者需要手动导入，增大了开发上手难度。

此外，不同平台的标准编译流程各不相同，虽然使用CMake可以构建编译系统，但其实主要起到粘合剂的作用，比如windows的标准编译流程是visual studio，Mac则是xcode，而Linux则是makefile，CMake实际上是通过定义一套统一流程，然后底层自己搞这些脏活，生成不同平台的标准编译项目，然后执行真正的编译过程。

## 项目导入示例

最简单的依赖包导入流程如下，在xmake.lua中，完成依赖包的声明（查找）和执行目标对库的依赖情况

```lua
target("HelloWorld")
    set_kine("binary")
    add_files("src/*.cpp")
```

这里以添加spdlog库为例

```lua
-- 声明依赖的包 -- 
add_require("spdlog") 

target("HelloWorld")
    set_kine("binary")
    add_files("src/*.cpp")
    add_packages("spdlog") 
    --- 添加依赖的第三方库 ---
```

## xmake包管理优势

- 统一的包管理配置和项目构建
- 多版本第三方库配置和使用
- 支持独立的虚拟环境，避免不同project依赖干扰并实现环境复用
- 可基于项目工具链单独编译依赖包，避免系统上多个编译器的潜在冲突
- 丰富的自定义配置选项
- 语法简单直观，易于配置
  
## xmake包管理劣势

- 生态没有CMake丰富，但是目前仍在发展中，部分包中的配置选项缺失或未实现
- 非主流构建系统，项目交接和传递可能存在困难
- 由于大多数第三方库托管在github，因而可能在下载时有不稳定的问题
- 依赖库为避免冲突使用hash生成包名，可读性较差
- 可以利用`xrepo scan <包名>` 扫描当前系统已经安装的包

## xmake中依赖包可配置项

### 单个包配置项

许多库提供了丰富的配置，包括依赖包的构建方式、模块化引入以及是否启用debug信息等，虽然官方的教程提供了查询API，但是在相关教程中并没有提示，另一方面基于lua的项目配置文件`xmake.lua`在编写时也缺少相应的补全提示，这也是本次记录的原因之一。

由于xmake的需要一个`xmake.lua`的参与，因而首先到当前需要配置的xmake工程中并用终端进入工程目录执行以下命令。

```bash
xmake require --info spdlog
```

结果如下所示，其查询结果提供了丰富的信息，这里为简洁起见省略了部分信息

- 依赖包的最新版本和来源信息
- 部署和安装位置
- requires -> configs 基于当前项目已经确定的配置信息
- configs 依赖包的可配置项
- configs(builtin) 默认所有包配置项和当前项目对其的配置选项
- references 当前的项目

```bash
The package info of project:
    require(spdlog):
      -> description: Fast C++ logging library.
      -> version: v1.14.1
      -> license: MIT
      -> urls:
         -> https://github.com/gabime/spdlog/archive/refs/tags/v1.14.1.zip
            -> 429dfdf3afc1984feb59e414353c21c110bc79609f6d7899d52f6aa388646f6d
         -> https://github.com/gabime/spdlog.git
            -> v1.14.1
      -> repo: xmake-repo https://gitee.com/tboox/xmake-repo.git master
      -> cachedir: C:\Users\XXX\AppData\Local\.xmake\cache\packages\2408\s\spdlog\v1.14.1
      -> installdir: C:\Users\XXX\AppData\Local\.xmake\packages\s\spdlog\v1.14.1\80d419e5424c4e35abf323a68572f96c
      -> searchdirs:
      -> searchnames:
         -> spdlog-v1.14.1.zip
         -> v1.14.1.zip
         -> spdlog (git)
         -> spdlog-1.14.1.zip
      -> fetchinfo: v1.14.1
          -> license: MIT
          -> sysincludedirs: C:\Users\XXX\AppData\Local\.xmake\packages\s\spdlog\v1.14.1\80d419e5424c4e35abf323a68572f96c\include
          -> version: v1.14.1
      -> platforms: all
      -> requires:
         -> plat: windows
         -> arch: x64
         -> configs:
            -> toolchains: clang-cl
            -> header_only: true
            -> ...
      -> configs:
         -> header_only: Use header only version. (default: true)
         -> fmt_external: Use external fmt library instead of bundled. (default: false)
         -> wchar: Support wchar api. (default: false)
         -> ...
      -> configs (builtin):
         -> debug: Enable debug symbols. (default: false)

         -> ...
      -> references:
         -> 240807: C:\Users\XXX\source\repos\xxx
```

如下是启用部分特性的示例

```lua
add_requires("spdlog",{configs = {header_only = false,std_format=true}})

set_toolchains("clang-cl")

target("HelloWorld")
    set_kind("binary")
    add_files("src/*.cpp")
    add_packages("spdlog")
```

构建过程中出现如下提示，显示当前已经启用的部分非默认特性

```bash
in xmake-repo:
  -> spdlog v1.14.1 [header_only:n, runtimes:"MT", toolchains:"clang-cl", std_format:y]
```

### 批量包默认配置

当存在多个依赖包时，可能需要默认配置选项。xmake 提供了一个默认配置定义接口 `add_requireconfs`，可以为不同的包依赖提供默认配置，同时针对个别包可以单独配置覆盖默认配置

```lua
add_requireconfs("*", {configs = {shared = true}})
add_requires("zlib") 
add_requires("pcre")
add_requires("libwebp") 
add_requires("libcurl", {configs = {shared = false}})
```

## 依赖包锁定

在整个项目的最顶级目录的根xmake.lua 添加如下代码，其作为一个全局配置会导出当前以及所有附属的xmake项目的依赖环境

```lua
set_policy("package.requires_lock", true)
```

# Ref

- [xmake](https://xmake.io/#/)
  -