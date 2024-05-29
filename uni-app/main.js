import App from './App'
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import './uni.promisify.adaptor'
import store from "./store"
Vue.prototype.$store = store
Vue.use(uView)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  store,
  ...App
})
app.$mount()
