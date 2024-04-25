# 快速开始

本项目是一个基于`monorepo`模式的多个项目集合，内部集成了`NestJS`实现后端接口、基于`Vue`开发的前端`H5`项目、基于`React`开发的后端管理系统。提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。

## 项目结构

```bash
.vscode # 存放vscode的命令脚本
nest-serve # 使用nestJS开发的项目后端接口
script # 存放一些脚本信息，其中包括定时推送到Gitee和GitHub的脚本
shared # 存放公共文件
vite-press # vitepress的文档地址
vite-react-admin # 使用React+Vite开发的后台管理系统
vite-vue-web # 使用V3+vite开发的H5项目
pnpm-workspace.yaml # 用来指定该项目下面的子项目文件夹
```

```bash
├─shared
  ├─assets  # 存放静态资源
  ├─common  # 存放公共方法
  ├─dto     # 存放接口实例，比如接口需要的字段和返回的字段
  ├─enum    # 存放 ts 的枚举
  ├─interface # 存放 ts 的接口类型
  └─model   # 存放 模块
```

::: warning 注意哟！！！

`webpack` 接管 的`nestJS`项目要想正常获取到 `shared` 文件夹中的数据，需要在 `webpack` 配置文件中添加一个依赖
```js
const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")
const sharedDirPath = path.resolve(__dirname, "../shared")
module.exports = {
  ...
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@shared": sharedDirPath
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: sharedDirPath,
          to: "shared"
        }
      ]
    })
  ],
  ...
}

```
同理，`vite` 项目要想获取到 `shared` 文件夹的数据，也需要在 `vite.config.ts` 中添加配置
```ts
import { pluginsCopy } from "vite-plugin-static-copy"
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "../shared")
    }
  },
  plugins: [
    vue(),
    pluginsCopy({
      targets: [
        { src: path.resolve(__dirname, "../shared"), dest: "dist/shared" }
      ]
    })
  ]
})
```

如果想要有`@shared`代码提示，还需要再**每个项目**的目录下面配置 `tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@shared/*": ["../shared/*"]
    }
  }
}
```
:::

## windows 自动推送脚本

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

## 添加 `vscode` 任务

在项目根目录下面创建`.vscode/tasks.json`文件，同时安装一个拓展[Task Explorer](https://marketplace.visualstudio.com/items?itemName=spmeesseman.vscode-taskexplorer)
![vscode-tasks](/images/start/vscode-tasks.png)

安装该拓展之后，可以看到不同的命令可以直接运行，这里的命令名称来源于下面的`.vscode/tasks.json`文件中的`label`字段。

![Snipaste_2023-12-21_15-35-05](/images/start/Snipaste_2023-12-21_15-35-05.png)
代码说明

- 在 `monorepo`（单仓库多包）项目中`pnpm -C` 是 `pnpm` 命令的一个选项，用于指定命令的执行目录（也称为工作目录或上下文目录）。
- `"command": "pnpm -C nest-server start:dev"` 相当于进入 `nest-server` 文件夹之后，运行`package.json`中的 `start:dev` 命令。

```json
{
  "label": "Run nest-server", // 这是一个任务名称
  "type": "shell", // 以 shell 命令运行
  "command": "pnpm -C nest-server start:dev", // 相当于进入 nest-server 文件夹之后，运行 start:dev 命令
  "problemMatcher": [],
  "presentation": {
    "panel": "shared",
    "showReuseMessage": true,
    "clear": false
  },
  "group": {
    "kind": "build",
    "isDefault": true
  }
}
```

- `"dependsOn": ["Run nest-server", "Run vite-vue-web", "Run vite-react-admin"]` 相当于一次性运行三个命令，打开三个窗口

```json
{
  "label": "Run Meantime Nestjs Vite React",
  "type": "shell",
  "presentation": {
    "reveal": "always",
    "panel": "shared"
  },
  "problemMatcher": [],
  "dependsOn": ["Run nest-server", "Run vite-vue-web", "Run vite-react-admin"]
}
```

::: details 完整代码

```json
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Run nest-server",
      "type": "shell",
      "command": "pnpm -C nest-server start:dev",
      "problemMatcher": [],
      "presentation": {
        "panel": "shared",
        "showReuseMessage": true,
        "clear": false
      },
      "group": {
        "kind": "build",
        "isDefault": true
      }
    },
    {
      "label": "Run vite-vue-web",
      "type": "shell",
      "command": "pnpm -C vite-vue-web dev",
      "problemMatcher": [],
      "presentation": {
        "panel": "shared",
        "showReuseMessage": true,
        "clear": false
      },
      "group": {
        "kind": "build",
        "isDefault": true
      }
    },
    {
      "label": "Run vite-react-admin",
      "type": "shell",
      "command": "pnpm -C vite-react-admin dev",
      "problemMatcher": [],
      "presentation": {
        "panel": "shared",
        "showReuseMessage": true,
        "clear": false
      },
      "group": {
        "kind": "build",
        "isDefault": true
      }
    },
    {
      "label": "Run Meantime Nestjs Vite React",
      "type": "shell",
      "presentation": {
        "reveal": "always",
        "panel": "shared"
      },
      "problemMatcher": [],
      "dependsOn": [
        "Run nest-server",
        "Run vite-vue-web",
        "Run vite-react-admin"
      ]
    }
  ]
}
```

:::

## 使用`github`的`action`自动部署到`github-pages`中

### 创建部署的`deploy.yml`文件，在项目的根目录下面

`.github\workflows\deploy.yml`

![Snipaste_2023-12-21_09-34-09.png](/images/start/Snipaste_2023-12-21_09-34-09.png)

完整的代码：使用的是`pnpm`进行依赖安装。

```yml
name: 部署VitePress

on:
  push:
    branches:
      - docs # 这段是在推送到 docs 分支时触发该命令

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2
        with:
          ref: docs # 这一步检查 docs 代码

      - name: Setup Node.js and pnpm
        uses: actions/setup-node@v3
        with:
          node-version: "20.10.0" # 设置 nodejs 的版本

      - name: Install pnpm
        run: npm install -g pnpm # 全局安装 pnpm

      - name: Install dependencies
        run: pnpm install # 使用 pnpm 安装依赖

      - name: Build VitePress
        run: pnpm run docs:build # 这里是打包 vitepress 命令

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.PAT_TOKEN }} # 这一步很重要，单独看下面的大步骤，主要是用来给该脚本一些仓库权限
          publish_dir: .vitepress/dist # 指定该文件夹中的 dist
          publish_branch: gh-pages # 推送到关联仓库的 gh-pages 分支
          dotfiles: true # 包括在提交中，即使被 .gitignore 文件忽略
```

这段 YAML 文件定义了一个 GitHub Actions 工作流，用于在推送到 `docs` 分支时构建和部署 VitePress 项目。

- `on`: 定义触发工作流的事件，这里是在推送到 `docs` 分支时触发。

- `jobs`: 定义工作流中的任务。

  - `build-and-deploy`: 任务的名称，表示构建和部署。

    - `runs-on`: 指定任务运行的操作系统，这里是 `ubuntu-latest`。

    - `steps`: 定义任务的一系列步骤。

      - `name`: 步骤的名称。

      - `uses`: 使用的 GitHub Action。

      - `with`: 配置项，用于传递参数给 Action。

      - `run`: 执行的脚本命令。

其中，具体步骤解释如下：

1. 检出代码：使用 `actions/checkout` Action 将代码检出到工作目录。

2. 设置 Node.js 和 pnpm：使用 `actions/setup-node` Action 设置 Node.js 和安装 pnpm。

3. 安装 pnpm：全局安装 pnpm。

4. 安装依赖：使用 pnpm 安装项目依赖。

5. 构建 VitePress：运行 pnpm 命令构建 VitePress 项目。

6. 部署到 GitHub Pages：使用 `peaceiris/actions-gh-pages` Action 部署生成的静态文件到 GitHub Pages。配置中包括 GitHub Token、发布目录、发布分支以及是否包括 dotfiles（即使在 `.gitignore` 中也提交）等。

### 仓库说明

![Snipaste_2023-12-21_09-41-55.png](/images/start/Snipaste_2023-12-21_09-41-55.png)

### 以下创建私人 token 和 pages 详细的步骤截图

> 如果看不清楚，可以右键打开到新窗口预览

![请添加图片描述](/images/start/all-pic.png)

### `github_token: secrets.PAT_TOKEN`创建

#### 整合步骤

![请添加图片描述](/images/start/create-token.png)

#### 分解步骤

1.先点击个人头像，进入设置页面
![请添加图片描述](/images/start/Snipaste_2023-12-21_09-49-37.png)

2.进入 Developer Settings 设置
![请添加图片描述](/images/start/Snipaste_2023-12-21_09-50-53.png)

3.生成个人`token` Personal access tokens (classic)
![请添加图片描述](/images/start/Snipaste_2023-12-21_09-52-06.png)

4.设置 token
![请添加图片描述](/images/start/Snipaste_2023-12-21_09-54-50.png)

5.保存生成的 token
![请添加图片描述](/images/start/Snipaste_2023-12-21_09-56-15.png)

6.进入仓库添加该仓库的 token
![请添加图片描述](/images/start/Snipaste_2023-12-21_10-05-47.png)
![请添加图片描述](/images/start/Snipaste_2023-12-21_10-06-12.png)
![请添加图片描述](/images/start/Snipaste_2023-12-21_10-06-54.png)

### 4. 创建`githubpages`

#### 整合步骤

![请添加图片描述](/images/start/set-pages.png)

#### 分解步骤

![请添加图片描述](/images/start/Snipaste_2023-12-21_10-08-44.png)
![请添加图片描述](/images/start/Snipaste_2023-12-21_10-09-25.png)
