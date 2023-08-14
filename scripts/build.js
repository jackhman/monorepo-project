const fs = require("fs")
const execa = require("execa")
const dirs = fs.readdirSync("packages").filter(p => fs.statSync(`packages/${p}`).isDirectory())

async function build(target) {
  console.log(target)
  await execa("rollup", ["-c", "--environment", `TARGET:${target}`])
}

async function runParallel(dirs, build) {
  const result = []
  for (const dir of dirs) {
    result.push(build(dir))
  }
  return Promise.all(result)
}

runParallel(dirs, build).then(res=> {
  console.log(res)
})

console.log(dirs)