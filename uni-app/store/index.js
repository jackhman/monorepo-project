// 页面路径：store/index.js
import Vue from "vue"
import Vuex from "vuex"
import user from "./modules/user"
import app from "./modules/app"
Vue.use(Vuex) //vue的插件机制

const store = new Vuex.Store({
  modules: {
    app,
    user,
  }
})
export default store
