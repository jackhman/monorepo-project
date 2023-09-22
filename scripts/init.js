import { execSync } from "child_process"
const moduleUitls = ["pnpm", "yarn", "npm"]
const leng = moduleUitls.length

for (let index = 0; index < leng; index++) {
  const element = moduleUitls[index]
  try {
    const getOutPut = execSync(`${element} -v`)
    console.log(`${element} 的版本是: `, `${getOutPut}`)
    console.log("开始安装依赖: ")
    execSync(`${element} install`, { stdio: "inherit" })
    console.log("依赖安装完成!!!!")
    break
  } catch (error) {
    console.log(`${element}可能有问题, 开始使用其他包管理器`)
    if (index === leng - 1) {
      // 说明所有包管理器都有问题
      console.log(`${moduleUitls.join(",")}可能都有问题`)
    }
  }
}
