const fs = require("fs")
const path = require("path")

const dirs = fs.readdirSync("packages").filter(p => fs.statSync(`packages/${p}`).isDirectory())

console.log(dirs)