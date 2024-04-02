import { Injectable } from "@nestjs/common"
import * as fs from "fs"
import { join } from "path"
import * as dayjs from "dayjs"
@Injectable()
export class UploadService {
  constructor() {}
  async uploadImgFile(file: Express.Multer.File, ip: string) {
    const dir = dayjs().format("YYYYMMDD")
    const dateDirPath = join(__dirname, `../public`)
    // 判断是否已经存在了文件夹
    if (!fs.existsSync(dateDirPath)) {
      // 用来创建 public 文件夹
      fs.mkdirSync(dateDirPath)
    }
    const dirPath = join(__dirname, `../public/${dir}`)
    if (!fs.existsSync(dirPath)) {
      // 用来创建文件夹
      fs.mkdirSync(dirPath)
    }
    const path = join(__dirname, `../public/${dir}/${file.originalname}`)
    const writeStream = fs.createWriteStream(path)
    writeStream.write(file.buffer)
    return `http://${ip}/static/${dir}/${file.originalname}`
  }
}
