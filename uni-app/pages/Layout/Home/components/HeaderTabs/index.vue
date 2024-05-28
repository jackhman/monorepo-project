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
      :current="current"
      @click="tabsClick"
    >
    </u-tabs>
  </view>
</template>
<script>
export default {
  name: "HeaderTabs",
  props: {
    list: {
      type: Array,
      required: true,
      default: ()=> []
    },
    current: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    tabsClick({index}) {
      this.$emit("update:current", index)
    }
  }
}
</script>

<style lang="scss" scoped></style>
