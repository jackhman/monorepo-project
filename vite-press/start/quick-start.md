# 快速开始

本项目是一个基于`monorepo`模式的多个项目集合，内部集成了`NestJS`实现后端接口、基于`Vue`开发的前端`H5`项目、基于`React`开发的后端管理系统。提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。

## 项目结构

```bash
.vscode # 存放vscode的命令脚本
nest-serve # 使用nestJS开发的项目后端接口
script # 存放一些脚本信息，其中包括定时推送到Gitee和GitHub的脚本
vite-press # vitepress的文档地址
vite-react-admin # 使用React+Vite开发的后台管理系统
vite-vue-web # 使用V3+vite开发的H5项目
pnpm-workspace.yaml # 用来指定该项目下面的子项目文件夹
```

## windows自动推送脚本

```bat
@echo off

REM 推送到 Gitee
cd /d D:\Wrok Project\green-gis
git push gitee zhao.liu-vue3:dev

set retry_count=0

:retry
REM 推送到 GitHub
git push github zhao.liu-vue3:dev

REM 检查是否推送到 GitHub 成功
if %errorlevel% neq 0 (
    set /a retry_count+=1
    echo 重试次数: %retry_count%
    if %retry_count% lss 10 goto retry
    echo 达到最大重试次数。退出。
    exit /b %errorlevel%
)
```

::: details 解释说明:
这个脚本尝试按顺序推送到 Gitee 和 GitHub，如果推送到 GitHub 失败，它会最多重试 10 次。每次失败后，它会增加重试次数并检查是否达到最大重试次数。如果达到最大重试次数，脚本将显示相应的消息并以与上一个命令相同的错误代码退出。最后，你可以在 `REM 添加其他命令或操作` 部分添加其他命令或操作，如果有的话。

1. `@echo off`：关闭脚本中命令的回显，使输出更加清晰。

2. `cd /d D:\Wrok Project\green-gis`：切换当前工作目到 `D:\Wrok Project\green-gis`。

3. `set retry_count=0`：初始化一个名为 `retry_count` 变量，初始值为 0。该变量将用于记录重试次数。

4. `:retry`：这是一个标签，表示一个循环的开始。命名为`retry`，将用作 `goto` 命令的目标，实现重试逻辑。

5. `REM 推送到 Gitee`：这一行是一个注释，说明接下来的命令是将代码推送到 Gitee。

6. `REM 推送到 GitHub`：这一行是一个注释，说明接下来的命令是将代码推送到 GitHub。

7. `if %errorlevel% neq 0`：检查上一个命令（`git push github master`）的退出代码是否不等于 0（表示失败）。

8. `set /a retry_count+=1`：将 `retry_count` 变量加 1。

9. `echo 重试次数: %retry_count%`：在控制台输出当前重试次数。

10. `if %retry_count% lss 10 goto retry`：检查重试次数是否小于 10，如果是，则跳转到 `retry` 标签，重新执行循环。

11. `echo 达到最大重试次数。退出。`：输出一条消息表示已经达到最大重试次数。

12. `exit /b %errorlevel%`：以上一个命令的错误代码退出脚本，确保脚本返回与失败的命令相同的错误代码。
    :::

## 依赖安装

::: tip 注意
添加项目的前提和依赖安装的前提是需要到`pnpm-workspace.yaml` 文件中指定项目地址，如下就是分别指定了四个项目文件夹地址

```yaml
packages:
  - "nest-server/"
  - "vite-vue-web/"
  - "vite-react-admin/"
  - "vite-press/"
```

:::

### 安装全局的依赖

需要在根目录下面使用`-w`命令

```bash
pnpm add axios -w
```

### 安装局部的依赖

需要先进入对应的项目中, 再使用安装命令

```bash
cd vite-vue-web

pnpm add vue-router
```

## 使用`github`的`action`自动部署到`github-pages`中
