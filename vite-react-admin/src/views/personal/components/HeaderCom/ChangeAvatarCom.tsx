import { Upload, message } from "antd"
import ImgCrop from "antd-img-crop"
import "./avatar-upload.scss"

import { UpdateUserInfoDto, UserInfoDto } from "@shared/dto/user.dto"
import { ResultCode, ResultMsg } from "@shared/enum/result-enum"
import { updateUserInfoApi } from "@/api/modules/user"
import { uploadImgApi } from "@/api/modules/common"
import { getUserIdStorage } from "@/utils/modules/commonSave"
interface ICom {
  userInfo: UserInfoDto
}

/** 用户上传头像组件 */
const ChangeAvatarCom = ({ userInfo }: ICom) => {
  const { avatar } = userInfo
  /** 自定义上传方法 */
  const customRequest = async file => {
    const formData = new FormData()
    formData.append("file", file.file)
    const updateRes = await uploadImgApi(formData)
    if (updateRes.code === ResultCode.SUCCESS) {
      const updateUser: UpdateUserInfoDto = {}
      updateUser.avatar = updateRes.data
      const data = await updateUserInfoApi(getUserIdStorage(), updateUser)
      if (data.code === ResultCode.SUCCESS) {
        message.success(ResultMsg.UPDATE_SUCCESS)
      } else {
        message.error(data.msg)
      }
    }
  }
  return (
    <ImgCrop>
      <Upload
        action=""
        customRequest={customRequest}
        listType="picture-card"
        maxCount={1}
        className="user-avatar-upload"
      >
        <div className="user-avatar-img">
          <img src={avatar} alt="" />
          <span className="change-avatar-span">更换头像</span>
        </div>
      </Upload>
    </ImgCrop>
  )
}
export default ChangeAvatarCom
