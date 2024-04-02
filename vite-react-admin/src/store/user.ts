import { makeAutoObservable } from "mobx"
import { UserInfoDto } from '@shared/dto/user.dto'
class UserStore {
  constructor() {
    makeAutoObservable(this)
  }
  userInfo: UserInfoDto = {
    userName: "",
    nickName: "",
    avatar: ""
  }
  /** 存储用户的信息 */
  saveUserInfo(userInfo: UserInfoDto) {
    this.userInfo = userInfo
    console.log(this.userInfo)
  }
}

export const userStore = new UserStore()
