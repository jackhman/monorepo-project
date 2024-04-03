import {
  Body,
  Controller,
  Post,
  Req,
  UploadedFile,
  UseInterceptors
} from "@nestjs/common"
import { FileInterceptor } from "@nestjs/platform-express"
import { Express } from "express"
import { UploadService } from "./upload.service"
import { R } from "../utils/R/R"
@Controller("upload")
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post("file")
  @UseInterceptors(FileInterceptor("file"))
  async uploadFile(
    @Req() request: Request,
    @UploadedFile() file: Express.Multer.File
  ) {
    const getFilePath = await this.uploadService.uploadImgFile(file, request.headers["host"])
    return R.success().setData(getFilePath)
  }
}
