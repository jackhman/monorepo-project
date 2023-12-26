import { FC } from 'react'
import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import './avatar-upload.scss'

import { UserInfoDto } from '@shared/dto/user/user.dto'
// import { uploadUserAvatarApi } from '@/api/modules/common'
// import { uploadUserInfoApi } from '@/api/modules/user'

// import { ResultCode } from '@shared/enum/result-enum/index'
interface ICom {
  userInfo: UserInfoDto
}

/** 用户上传头像组件 */
const ChangeAvatarCom: FC<ICom> = ({ userInfo}) => {
  const { avatar, id } = userInfo

  /** 自定义上传方法 */
  const customRequest = async file => {
    const formData = new FormData()
    formData.append('file', file.file)
    formData.append('uploadByUserId', id!.toString())

    // const urlData = await uploadUserAvatarApi(formData)
    // if(urlData.code === ResultCode.SUCCESS) {
    //   const uploadUser = new MUploadUserInfo()
    //   uploadUser.avatar = urlData.data.url
    //   const data = await uploadUserInfoApi(id, uploadUser)
    //   if (data.code === ResultCode.SUCCESS) {
    //     refreshUserInfoFlag(true)
    //     message.success('更新成功')
    //   }
    //   else {
    //     message.error(data.msg)
    //   }
    // }
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
