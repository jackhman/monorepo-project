<template>
  <view class="create-edit-page">
    <u-navbar
      :title="title"
      bgColor="#f8f8f8"
      :titleStyle="{ color: '#000', 'font-weight': 700 }"
      @leftClick="leftClick"
    >
    </u-navbar>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      default: "创建文章"
    }
  },
  methods: {
    leftClick() {
      uni.switchTab({
        url: "/pages/Layout/Home/index"
      })
    }
  }
}
</script>
