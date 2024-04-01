import { Injectable } from "@nestjs/common"
import * as fs from "fs"
import { join } from "path"
import * as dayjs from "dayjs"
@Injectable()
export class UploadService {
  constructor() {}
  async uploadImgFile(file: Express.Multer.File) {
    console.log(file)
    const dir = dayjs().format("YYYYMMDD")
    const dirPath = `../src/public/${dir}`
    const _stat = fs.statSync(join(__dirname, dirPath))
    // 判断是否已经存在了文件夹
    if (_stat && !_stat.isDirectory()) {
      // 用来创建文件夹
      fs.mkdirSync(join(__dirname, dirPath))
    }
    const path = join(__dirname, `../src/public/${dir}/${file.originalname}`)
    const writeStream = fs.createWriteStream(path)
    writeStream.write(file.buffer)
    return `http://localhost:6789/uploads/${file.originalname}`
  }

  async moveFile(sourcePath: string, destPath: any) {
    try {
      // 确保目标文件夹存在
      // await fs.promises.mkdir(destPath, { recursive: true })

      // 移动文件
      await fs.promises.rename(sourcePath, destPath)

      console.log("文件移动成功")
    } catch (err) {
      console.error("文件移动失败:", err)
    }
  }
}
