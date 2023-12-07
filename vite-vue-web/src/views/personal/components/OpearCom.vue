<template>
  <!-- 功能 -->
  <IconComVue
    v-for="item in opearList"
    :icon-props="item"
    :key="item.icon"
  />
</template>

<script setup lang="ts">
import IconComVue from './IconCom.vue'
const opearList: Array<{ icon: string; text: string, color:string }> = [
  {
    icon: 'icon-xiaoxitongzhi',
    text: '消息通知',
    color: '#ff2e24'
  },
  {
    icon: 'icon-shoucang',
    text: '收藏',
    color: '#ff2e24'
  },
  {
    icon: 'icon-lishi',
    text: '历史',
    color: '#ff2e24'
  }
]
</script>

<style scoped lang="scss">
.opear-box-item {
  display: flex;
  flex-direction: column;
  text-align: center;
  .icon {
    font-size: 20px;
    margin-bottom: 6px;
    color: $base-color;
  }
  .text {
    font-size: 10px;
  }
}
</style>
