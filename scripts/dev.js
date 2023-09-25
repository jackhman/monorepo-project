import { execSync, spawnSync } from "child_process"
import fs from "fs"
import path from "path"
const moduleUitls = ["pnpm", "yarn", "npm"]
const leng = moduleUitls.length

for (let index = 0; index < leng; index++) {
  const element = moduleUitls[index]
  try {
    const getOutPut = execSync(`${element} -v`)
    console.log(`${element} 的版本是: `, `${getOutPut}`)
    console.log("运行项目中.... ")
    const projects = fs
      .readdirSync(".")
      .filter(name => fs.existsSync(path.join(name, "package.json")))
    projects.forEach(project => {
      if (fs.existsSync(`${project}/vite.config.js`)) {
        // Vite 项目
        spawnSync("pm2", ["dev"], {
          cwd: project,
          stdio: "inherit"
        })
      } else {
        // Node.js 项目
        spawnSync("pm2", ["start:dev"], { cwd: project, stdio: "inherit" })
      }
    })
    break
  } catch (error) {
    console.log(error)
    console.log(`${element}可能有问题, 开始使用其他包管理器`)
    if (index === leng - 1) {
      // 说明所有包管理器都有问题
      console.log(`${moduleUitls.join(",")}可能都有问题`)
    }
  }
}
