import { execSync } from "child_process"
import chalk from "chalk"
import vscode from "vscode"
const moduleUitls = ["pnpm", "yarn", "npm"]
const leng = moduleUitls.length

for (let index = 0; index < leng; index++) {
  const element = moduleUitls[index]
  try {
    const getOutPut = execSync(`${element} -v`)
    console.log(
      chalk.green(`${element} 的版本是: `),
      chalk.bgBlue(`${getOutPut}`)
    )
    console.log(chalk.yellow("开始安装依赖: "))
    execSync(`${element} install`, { stdio: "inherit" })
    console.log(chalk.yellow("依赖安装完成!!!!"))

    console.log(chalk.blue("开始启动 vite 前端项目"))
    execSync(`code --list-extensions`, { stdio: "inherit" })
    vscode.commands.executeCommand('workbench.action.terminal.split', ['npm run dev']);
    vscode.commands.executeCommand('workbench.action.terminal.sendSequence', { 
      text: `${element} run dev\r` 
    });
    // execSync(``, { stdio: "inherit" })

    break
  } catch (error) {
    console.log(chalk.red(`${element}可能有问题, 开始使用其他包管理器`))
    if (index === leng - 1) {
      // 说明所有包管理器都有问题
      console.log(chalk.red(`${moduleUitls.join(",")}可能都有问题`))
    }
  }
}
