<template>
  <view class="home-box">
    <SearchCom homeSearch @inputClick="searchClick"></SearchCom>
  </view>
</template>

<script>
export default {
  name: "HomeCom",
  data() {
    return {}
  },
  methods: {
    searchClick() {
      uni.navigateTo({
      	url:"/pages/Search/Search"
      })
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
