import { createWebHistory, RouteRecordRaw, createRouter } from "vue-router"
import { ROUTE_NAME, ROUTE_PATH } from "./RouteConst"
import permission from "./permission"

const routes: RouteRecordRaw[] = [
  {
    path: ROUTE_PATH.LAYOUT,
    redirect: ROUTE_PATH.HOME,
    name: ROUTE_NAME.LAYOUT,
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: ROUTE_PATH.HOME,
        name: ROUTE_NAME.HOME,
        component: () => import("@/views/home/index.vue")
      },
      {
        path: ROUTE_PATH.SHOPCAR,
        name: ROUTE_NAME.SHOPCAR,
        component: () => import("@/views/shopCar/index.vue")
      },
      {
        path: ROUTE_PATH.PERSONAL,
        name: ROUTE_NAME.PERSONAL,
        component: () => import("@/views/personal/index.vue")
      }
    ]
  },
  {
    path: ROUTE_PATH.LOGIN,
    name: ROUTE_NAME.LOGIN,
    component: () => import("@/views/login/index.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
permission(router)

export default router
