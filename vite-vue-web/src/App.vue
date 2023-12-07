<template>
  <router-view v-slot="{ Component }">
    <KeepAlive :include="includeKeepAlive">
      <component :is="Component" />
    </KeepAlive>
  </router-view>
  <van-overlay :show="store.fullOverlayFlag" :z-index="maxZIndex">
    <div class="wrapper" @click.stop>
      <div class="spinner-container">
        <div class="spinner">
          <div class="spinner">
            <div class="spinner">
              <div class="spinner">
                <div class="spinner">
                  <div class="spinner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span class="loading-text">数据加载中...</span>
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

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  .spinner-container {
    width: 100px;
    height: 100px;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    transform: scale(0.6);
    .spinner {
      position: absolute;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      border: 5px solid transparent;
      border-radius: 50%;
      border-top-color: #fff;
      animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.79) infinite;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
  }

  .loading-text {
    font-size: 12px;
    color: #fff;
  }
}
</style>
