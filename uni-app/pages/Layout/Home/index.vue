<template>
  <view class="home-box">
    <SearchCom homeSearch @inputClick="searchClick"></SearchCom>
    <HeaderTabs :list="headerTabsList"></HeaderTabs>
  </view>
</template>

<script>
import HeaderTabs from "./components/HeaderTabs/index.vue"
import { articleCategoryApi } from "@/api/modules/article"
export default {
  name: "HomeCom",
  components: {
    HeaderTabs
  },
  data() {
    return {
      headerTabsList: []
    }
  },
  mounted() {
    this.fetchInit()
  },
  methods: {
    async fetchInit() {
      try {
        this.articleCategoryMethod()
      } catch (error) {
        console.log(error)
      }
    },
    // 获取头部分类列表的数据
    async articleCategoryMethod() {
      const data  = await articleCategoryApi({level: 2})
      console.log(data)
    },
    searchClick() {
      uni.navigateTo({
        url: "/pages/Search/Search"
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
