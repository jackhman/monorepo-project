import { makeAutoObservable } from "mobx"
import { UserInfoDto } from '@shared/dto/user.dto'
class UserStore {
  constructor() {
    makeAutoObservable(this)
  }
  userInfo: UserInfoDto = {
    userName: ""
  }
}

export const userStore = new UserStore()
