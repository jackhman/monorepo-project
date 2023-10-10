import { defineStore } from "pinia"
import { ref } from "vue"
import { getUserInfoApi } from "@/api/modules/user"
import { UserInfoDto } from "@shared/dto/user/user.dto"

export const useUserStore = defineStore("user", () => {
  const userInfo = ref<UserInfoDto>()

  async function getUserInfo(id: string) {
    const data = await getUserInfoApi(id)
    console.log(data)
  }

  return {
    userInfo,
    getUserInfo
  }
})
