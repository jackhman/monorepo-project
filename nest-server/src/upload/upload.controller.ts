import {
  Body,
  Controller,
  Get,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseInterceptors
} from "@nestjs/common"
import { FileInterceptor } from "@nestjs/platform-express"
import { Express } from "express"
import { UploadDto } from "@shared/dto/upload.dto"
import { UploadService } from "./upload.service"
import { R } from "../utils/R/R"

@Controller("upload")
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post("file")
  @UseInterceptors(FileInterceptor("file"))
  async uploadFile(
    @Body() body: UploadDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    const getFilePath = await this.uploadService.uploadImgFile(file)
    return R.success().setData({file: getFilePath})
  }
}
