import { Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
import { BizException } from "../utils/exceptionHandler/biz-exception.filter"
import { ResultCode, ResultMsg } from "@shared/enum/result-enum"
import { MenuAddDto, MenuRouterDto } from "@shared/dto/menu.dto"
import { handleValidate } from "../utils"
import { MenuPageDto } from "@shared/dto/page.dto"
import { MenuVisibleEnum } from "@shared/enum/menu-enum"
@Injectable()
export class UploadService {}
