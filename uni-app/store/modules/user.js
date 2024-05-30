import { getUserInfoApi } from "@/api/modules/user"
import { StorageConst } from "@/utils/modules/constVariable"
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
    async ACT_userInfo({ commit }) {
      try {
        commit("app/MUT_Loading", true)
        const data = await getUserInfoApi(
          uni.getStorageSync(StorageConst.userId)
        )
        if (data.code === 0) {
          commit("MTU_userInfo", data.data)
        }
      } catch (e) {
        console.log(e)
      } finally {
        commit("app/MUT_Loading", false)
      }
    }
  }
}
