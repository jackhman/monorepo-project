import chalk from "chalk"

function checkAndInstall(packageName) {
  let isInstalled

  try {
    require.resolve(packageName)
    isInstalled = true
  } catch (e) {
    isInstalled = false
  }

  if (!isInstalled) {
    console.log(chalk.yellow(`${packageName}未安装,请运行以下命令进行安装:`))
    console.log(chalk.green(`npm install ${packageName}`))
    return false
  }

  return true
}

// 使用示例
const isExpressInstalled = checkAndInstall("express")
if (!isExpressInstalled) {
  // 处理express未安装的情况
}
