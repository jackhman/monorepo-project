# 介绍

[NestJS 9x 的官方网址](https://docs.nestjs.cn/9/introduction)

<!-- https://img.shields.io/badge/NestJS-v9.5.0-brightgreen?labelColor=pink -->
<p align="center">
  <a href="https://github.com/nodejs/node/releases/tag/v20.10.0" target="_blank"><img src="https://img.shields.io/badge/nodejs-v20.10.0-brightgreen" alt="Nodejs" /></a>
  <a href="https://github.com/nestjs/nest" target="_blank"><img src="https://img.shields.io/badge/NestJS-v9.5.0-brightgreen" alt="NestJS" /></a>
</p>

::: tip
`nestJs`需要先进行全局安装
```bash
$ npm i -g @nestjs/cli
$ nest new project-name
```
:::

## `webpack`接管`nestjs`编译
```
- webapck.config.js
- webpack.dev.js
- webpack.prod.js
```

`package.json`中修改配置
```json
...
"scripts": {
  "build": "nest build --webpackPath ./webpack.prod.js",
  "start": "nest start",
  "start:dev": "nest start --watch --webpackPath ./webpack.dev.js",
  "start:debug": "nest start --debug --watch",
  "start:prod": "node dist/main",
  ...
}
```

## `webapck.config.js`
`copy-webpack-plugin`模块用来复制跟目录下面的 `shared` 文件到 `nestjs` 目录下面
```bash
pnpm add copy-webpack-plugin -D 
```

::: details `webapck.config.js`详细配置
```js
const path = require("path")
const webpack = require("webpack")
const CopyPlugin = require("copy-webpack-plugin")
const sharedDirPath = path.resolve(__dirname, "../shared")
module.exports = {
  entry: "./src/main.ts",
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@shared": sharedDirPath
    }
  },
  mode: "production",
  devServer: {
    hotOnly: true
  },
  optimization: {
    concatenateModules: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: sharedDirPath,
          to: "shared"
        }
      ]
    })
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js"
  }
}
```
:::
