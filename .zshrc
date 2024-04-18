#!/bin/bash

# 检查是否安装了 nvm
if ! command -v nvm &> /dev/null; then
    echo "Error: nvm is not installed or not in PATH."
    exit 1
fi

# 检查是否存在 .nvmrc 文件
if [ ! -f ".nvmrc" ]; then
    echo "Error: .nvmrc file not found."
    exit 1
fi

# 读取 .nvmrc 文件中的版本号
desired_version=$(<.nvmrc)

# 使用 nvm 切换到指定版本
nvm use "$desired_version"

# 检查切换是否成功
if [ $? -ne 0 ]; then
    echo "Error: Failed to switch Node.js version."
    exit 1
fi

echo "Node.js version switched to $desired_version."
