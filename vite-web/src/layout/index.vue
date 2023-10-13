<template>
  <div class="layout-box">
    <!-- 内容部分 -->
    <div id="layout" ref="layoutRef" class="layout-box-container">
      <router-view v-slot="{ Component }">
        <keep-alive :include="includeKeepAlive">
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <!-- <router-view></router-view> -->
    </div>
    <!-- 底部的导航栏 -->
    <div class="layout-box-bottom">
      <div
        v-for="item in barList"
        :key="item.name"
        :class="[item.name === currentPath && 'current-path', 'bar-item']"
        @click="barItemClick(item)"
      >
        <span :class="[item.icon, 'iconfont', 'bar-item-icon']" />
        <span class="bar-item-text">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, watchEffect } from "vue"
import { useRoute, useRouter } from "vue-router"
import {
  ROUTE_NAME,
  KeepAliveRouteList,
  RouteRecordScroll
} from "@/router/RouteConst"
import { useAppStore } from "@/store/app"

const store = useAppStore()

interface IBar {
  icon: string
  label: string
  name: string
}
const barList: IBar[] = [
  {
    icon: "icon-shouye",
    label: "首页",
    name: ROUTE_NAME.HOME
  },
  {
    icon: "icon-gouwuche1",
    label: "购物车",
    name: ROUTE_NAME.SHOPCAR
  },
  {
    icon: "icon-ziyuan",
    label: "我的",
    name: ROUTE_NAME.PERSONAL
  }
]

/** 需要缓存的路由 */
const includeKeepAlive: string[] = KeepAliveRouteList

/** 获取 route 的实例 */
const getRoute = useRoute()
const getRouter = useRouter()
/** 获取当前的 path */
const currentPath = ref(ROUTE_NAME.HOME)
/** 获取 盒子的实例 */
const layoutRef = ref<HTMLDivElement>()
/** bar 的点击事件 */
const barItemClick = (item: IBar) => {
  if (item.name === getRoute.name) return
  currentPath.value = item.name
  getRouter.push({
    name: item.name
  })
}

/** 监听当前路由的变化 */
watch(
  () => getRoute.name,
  (currentRoute, prevRoute) => {
    const currentRouteName = currentRoute as string
    const prevRouteName = prevRoute as string
    // 用来保持页面滚动
    if (currentRouteName && RouteRecordScroll.has(currentRouteName)) {
      if (layoutRef.value) {
        store.scrollTop({ key: prevRouteName, top: layoutRef.value.scrollTop })

        nextTick(() => {
          if (layoutRef.value)
            layoutRef.value.scrollTop =
              store.state.app.routeScroll[currentRouteName]
        })
      }
    }
  }
)
// 用来处理当前选中的 路由
watchEffect(() => {
  if (getRoute.name) {
    currentPath.value = getRoute.name as string
  }
})
</script>

<script lang="ts">
export default {
  name: ROUTE_NAME.LAYOUT
}
</script>

<style scoped lang="scss">
.layout-box {
  height: 100vh;
  width: 100vw;
  &-container {
    height: calc(100vh - $layout-bottom-height);
    overflow-y: overlay;
    overflow-x: hidden;
    position: relative;
  }
  &-bottom {
    position: fixed;
    bottom: 0;
    z-index: 99999;
    width: 100%;
    border-top: 1px solid #eee;
    height: $layout-bottom-height;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $base-bgc;
    .bar-item {
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &.current-path {
        color: $base-color;
      }
      &-icon {
        font-size: 20px;
      }
      &-text {
        margin-top: 5px;
        font-size: 8px;
      }
    }
  }
}
</style>
