import { execSync } from "child_process"
import chalk from "chalk"
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
    break
  } catch (error) {
    break
  }
}
