# 定义一个函数来切换 Node.js 版本
function Switch-NvmVersion {
    param(
        [string]$Version
    )
    # 使用 nvm-windows 切换 Node.js 版本
    nvm use $Version
}

# 执行切换到指定版本的 Node.js
Switch-NvmVersion "20.10.0"
