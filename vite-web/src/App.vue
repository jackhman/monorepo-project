<template>
  <router-view v-slot="{ Component }">
    <KeepAlive :include="includeKeepAlive">
      <component :is="Component" />
    </KeepAlive>
  </router-view>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue"
import { ROUTE_NAME } from "@/router/RouteConst"
import { useAppStore } from "@/store/app"
const store = useAppStore()
/** 需要缓存的路由 */
const includeKeepAlive: string[] = [ROUTE_NAME.LAYOUT]

onMounted(() => {
  // 监听物理返回按钮
  window.addEventListener("popstate", handlePopstate)
})

/** 处理物理返回按钮 */
function handlePopstate() {
  if (store.dialogFlag) {
    store.changePopstateFlag(+new Date())
  }
}

onBeforeUnmount(() => {
  window.removeEventListener("popstate", handlePopstate)
})
</script>
