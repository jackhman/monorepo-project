<template>
  <div class="icon-com">
    <span
      :class="['icon-com-item iconfont', iconProps.icon]"
      :style="{color: iconProps.color}"
    />
    <span class="icon-com-text">{{ iconProps.text }}</span>
  </div>
</template>

<script setup lang="ts">
interface IIcon {
  icon: string
  text: string
  path?: string
  color?: string
}
defineProps<{ iconProps: IIcon }>()
</script>

<style scoped lang="scss">
.icon-com {
  display: flex;
  flex-direction: column;
  align-items: center;
  &-item {
    font-size: 20px;
  }
  &-text {
    margin-top: 6px;
    font-size: 10px;
    color: #808080;
  }
}
</style>
