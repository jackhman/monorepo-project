<template>
  <router-view v-slot="{ Component }">
    <KeepAlive :include="includeKeepAlive">
      <component :is="Component" />
    </KeepAlive>
  </router-view>
  <van-overlay :show="true" :z-index="maxZIndex">
    <div class="wrapper" @click.stop>
      <div class="block" />
    </div>
  </van-overlay>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue"
import { ROUTE_NAME } from "@/router/RouteConst"
import { useAppStore } from "@/store/app"
import scssConfig from "@/assets/styles/config.module.scss"

const maxZIndex = ref(scssConfig.maxIndex)
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
