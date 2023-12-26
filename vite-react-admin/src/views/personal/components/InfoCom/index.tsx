import "./index.scss"
import { UserInfoDto } from "@shared/dto/user/user.dto"

interface InfoComInter {
  userInfo: UserInfoDto
}

const InfoCom = (props: InfoComInter) => {
  const { userInfo } = props
  return (
    <div className="info-com-box">
      <p className="title">用户基本信息</p>
      <div className="info-item">
        <span className="label">用户名</span>
        <span className="value">{userInfo.userName}</span>
      </div>
      <div className="info-item">
        <span className="label">用户昵称</span>
        <span className="value">{userInfo.nickName}</span>
      </div>
      <div className="info-item">
        <span className="label">性别</span>
        <span className="value">{userInfo.gender ? "男" : "女"}</span>
      </div>
      <div className="info-item">
        <span className="label">手机号</span>
        <span className="value">{userInfo.phone}</span>
      </div>
      <div className="info-item">
        <span className="label">邮箱</span>
        <span className="value">{userInfo.email}</span>
      </div>
    </div>
  )
}

export default InfoCom
