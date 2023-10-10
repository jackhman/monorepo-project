import { createWebHistory, RouteRecordRaw, createRouter } from "vue-router"
import { ROUTER_NAME, ROUTER_PATH } from "./RouteConst"

const routes: RouteRecordRaw[] = [
  {
    path: ROUTER_PATH.LOGIN,
    name: ROUTER_NAME.LOGIN,
    component: () => import("@/views/login/index.vue")
  },
  {
    path: ROUTER_PATH.HOME,
    name: ROUTER_NAME.HOME,
    component: () => import("@/views/home/index.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
