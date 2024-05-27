<template>
  <view>
    <u-tabs
      :list="list"
      lineWidth="30"
      lineColor="#f56c6c"
      :activeStyle="{
        color: '#303133',
        fontWeight: 'bold',
        transform: 'scale(1.05)'
      }"
      :inactiveStyle="{
        color: '#606266',
        transform: 'scale(1)'
      }"
      itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
    >
    </u-tabs>
  </view>
</template>
<script>
export default {
  name: "HeaderTabs",
  data() {
    return {
      list: [
        {
          name: "关注"
        },
        {
          name: "推荐",
          badge: {
            isDot: true
          }
        },
        {
          name: "电影"
        },
        {
          name: "科技"
        },
        {
          name: "音乐"
        },
        {
          name: "美食"
        },
        {
          name: "文化"
        },
        {
          name: "财经"
        },
        {
          name: "手工"
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped></style>
