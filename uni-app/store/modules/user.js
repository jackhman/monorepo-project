import { getUserInfoApi, updateUserInfoApi } from "@/api/modules/user"
import { getUserIdStorage } from "@/utils"
export default {
  namespaced: true,
  state: {
    userInfo: {}
  },
  mutations: {
    MTU_userInfo(state, info) {
      state.userInfo = info
    }
  },
  actions: {
    /** 获取用户数据 */
    async ACT_userInfo({ commit }) {
      try {
        commit("app/MUT_Loading", true, { root: true })
        const data = await getUserInfoApi(getUserIdStorage())
        if (data.code === 0) {
          commit("MTU_userInfo", data.data)
        }
      } catch (e) {
        console.log(e)
      } finally {
        commit("app/MUT_Loading", false, { root: true })
      }
    },
    /** 发送请求，修改用户数据 */
    async ACT_updateUserInfo({ dispatch }, params) {
      try {
        const data = await updateUserInfoApi(getUserIdStorage(), params)
        if(data.code === 0) {
          await dispatch("ACT_userInfo")
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
