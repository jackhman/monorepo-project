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
import { diskStorage } from "multer"
import { UploadDto } from "@shared/dto/upload.dto"

@Controller("upload")
export class UploadController {
  constructor() {}
  @Post("file")
  @UseInterceptors(FileInterceptor("file"))
  uploadFile(
    @Body() body: UploadDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    
    return {
      body,
      file: file.buffer.toString()
    }
  }

  @UseInterceptors(FileInterceptor("file"))
  @Post("file/pass-validation")
  uploadFileAndPassValidation(
    @Body() body: UploadDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: "json"
        })
        .build({
          fileIsRequired: false
        })
    )
    file?: Express.Multer.File
  ) {
    return {
      body,
      file: file?.buffer.toString()
    }
  }

  @UseInterceptors(FileInterceptor("file"))
  @Post("file/fail-validation")
  uploadFileAndFailValidation(
    @Body() body: UploadDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: "jpg"
        })
        .build()
    )
    file: Express.Multer.File
  ) {
    return {
      body,
      file: file.buffer.toString()
    }
  }
}
