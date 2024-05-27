<template>
  <view class="home-box">
    <SearchCom homeSearch @inputClick="searchClick"></SearchCom>
    <HeaderTabs></HeaderTabs>
  </view>
</template>

<script>
import HeaderTabs from "./components/HeaderTabs/index.vue"
export default {
  name: "HomeCom",
  components: {
    HeaderTabs
  },
  data() {
    return {}
  },
  methods: {
    searchClick() {
      uni.navigateTo({
        url: "/pages/Search/Search"
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
