import axios from "../axiosConfig"
import { ResultModel } from "@shared/model"

/** 上传图片 */
export const uploadImgApi = (
  params: FormData
): Promise<ResultModel<string>> => axios.post(`upload/file`, params)
