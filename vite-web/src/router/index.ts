import { createWebHistory, RouterOptions, RouteRecordRaw } from "vue-router"
import { ROUTER_NAME, ROUTER_PATH } from "./RouteConst"


const routes: RouteRecordRaw[] = [
  {
    path: ROUTER_PATH.HOME,
    name: ROUTER_NAME.HOME,
    component: ()=> import("@/views/home/index.vue")
  }
]

const router:RouterOptions  = {
  history: createWebHistory(),
  routes
}

export default router
