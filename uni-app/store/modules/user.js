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
      try{
      	const data = await getUserInfoApi(uni.getStorageSync(StorageConst.userId))
				console.log(data);
      	commit.MTU_userInfo()
      }catch(e){
				console.log(e);
      	//TODO handle the exception
      }
    }
  }
}
