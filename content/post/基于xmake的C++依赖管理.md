---
title: 基于xmake的C++依赖管理
date: 2024-08-07T23:19:44+08:00
math: false
toc: true
tags: [工程管理,cpp,xmake]
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

- 统一的包管理配置和项目构建，避免不同平台特化
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

必须承认的是，由于不同平台的主流编译器（gcc、msvc、clang）在部分功能功能方面存在差异因而需要单独配置参数，因而有了冗长的项目配置文件，这一点无论是在哪种构建工具中都不可避免；另一方面
由于不同平台的默认包管理工具存在差异，因而造成不同系统版本依赖和依赖查找方面的不同，这一点在xmake中使用xrepo进行包管理，可以相对较好的进行统一配置解决不同包管理的问题。

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
  - 包的子模块
  - 依赖形式(header/lib)
  - 内部实现形式
  - char/wcahr
  - 等等
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

### 子模块依赖配置

在打包程序依赖时，我们有时候希望尽可能轻量化即打包尽可能少的依赖，对于部分第三方库诸如Boost、OpenCV等其提供部分依赖子模块以实现精简环境依赖，此时仅仅需要在config中指定依赖的子模块即可实现部分依赖导入,这里以boost为例。仍然我们首先进入一个xmake项目通过`require`命令查询boost的可配置参数。

```bash
xmake require --info boost
```

可以看到boost的子模块类似之前提到的spdlog中的可配置项，在configs中进行配置，进而有如下例子

```lua
add_requires("boost",{configs={log=true,system=true,filesystem=true,thread=true,regex=true,program_options=true,json=true}})

target("HelloWorld")
    set_kind("binary")
    add_files("src/*.cpp")
    add_packages("boost")

```

### 依赖别名

部分情况下我们使用xmake导入其他第三方管理器中的包时，包的查找和使用都应该使用相同的名字，为简化命名我们可以使用alias为部分依赖包简化命名，其对应例子如下

```lua
add_requires("cmake::tbb","apt::libopencv-dev")
target("HelloWorld")
    set_kind("binary")
    add_files("src/*.cpp")
    add_packages("cmake::tbb","apt::libopencv-dev)
```

使用简化别名后

```lua
add_requires("conan::zlib/1.2.11", {alias = "zlib", debug = true})
add_requires("conan::openssl/1.1.1g", {alias = "openssl",
    configs = {options = "OpenSSL:shared=True"}})

target("test")
    set_kind("binary")
    add_files("src/*.c")
    add_packages("openssl", "zlib")
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

add_requires("spdlog")
set_toolchains("clang-cl")
set_policy("package.requires_lock", true)

target("Test")
    set_kind("binary")
    add_files("src/*.cpp")
    add_packages("spdlog")

```

当项目完成构建后会在项目中生成当前项目依赖的环境已经对应的版本和来源信息

```
{
    __meta__ = {
        version = "1.0"
    },
    ["windows|x64"] = {
        ["spdlog#31fecfc4"] = {
            repo = {
                branch = "master",
                commit = "14e0c93cb3fc719a451ada1cf36f6951bb408b14",
                url = "https://gitee.com/tboox/xmake-repo.git"
            },
            version = "v1.13.0"
        }
    }
}
```



# Ref

- [xmake](https://xmake.io/#/)
