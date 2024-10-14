---
title: 基于xmake的C++代码调试
date: 2024-10-14T20:12:44+08:00
math: false
toc: true
tags: [工程管理,cpp,xmake,debug]
categories: [软件工程]
---

## 测试环境

- Visual Studio Code
- Platform: Windows 11
- Visual Studio Installer配置基础C++ msvc编译器

xmake在终端中的使用非常便捷,但是和各种IDE结合方面目前在部分流程上还存在些不足,没有像CMake一样那么完善,但基本够用

## 1. Basic

首先在vscode安装好且仅仅安装xmake插件后,此时运行一个简单的C++程序

1. 选择debug模式,并点击`Build`完成项目构建
2. 点击`debug`按钮,进行debug

![](https://markdown-image-1302476306.cos.ap-nanjing.myqcloud.com/202410142047888.png)

此时没有安装C/C++插件, xmake会使用visual studio打开可行性文件,仅能够调试出现错误或者抛出异常的程序,不能够手动添加断点(不推荐)。

安装vscode的`C/C++`插件,即可支持在vscode添加断点并进行调试,流程如上。

## 2. 带有启动参数的代码调试

手动配置基于task/launch的C/C++调试流程仍然有效,但是其配置流程过于繁琐,在这里推荐使用配置xmake启动参数的方式进行调试。

![](https://markdown-image-1302476306.cos.ap-nanjing.myqcloud.com/202410142111345.png)

打开项目后,在.vscode文件夹下创建`settings.json`文件,并配置如下信息,这个过程是指定xmake在不同模式下的启动参数,其背后实际上是xmake自动生成task/launch配置信息,并且支持不同的可执行程序配置不同的参数。

```json
{
    "xmake.runningTargetsArguments": {
        "default": [],
        "target1": []
    },
    "xmake.debuggingTargetsArguments": {
        "default": [],
        "target2": []
    }

}
```

参考基本流程完成项目build后,并配置debuggingTargetsArguments参数,然后点击debug按钮,即可在debug过程中注入指定参数。注意！这里参数是以空格为分界的字符串。举个例子

```json

// --filename backup.txt
// -v 0.5 0.5 0.5
// -p 1 1 0.7
// ...

"default": ["--filename","backup.txt",
            "-v","0.5","0.5","0.5", 
            "-p","1","1","0.7", 
            // "-p 1 1 0.7",
            "-s","GA_RES",
            "-m","debug"]

```
