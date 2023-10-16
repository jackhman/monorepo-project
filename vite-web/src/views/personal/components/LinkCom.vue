<template>
  <IconComVue
    v-for="item in linkList"
    :icon-props="item"
    :key="item.icon"
  />
</template>

<script setup lang="ts">
import IconComVue from './IconCom.vue'
const linkList:Array<{icon:string, text: string}> = [
  {
    icon: 'icon-yonghufankui',
    text: '用户反馈'
  },
  {
    icon: 'icon-zhinengkefu',
    text: '智能客服'
  }
]
</script>


<style scoped lang="scss">
</style>
