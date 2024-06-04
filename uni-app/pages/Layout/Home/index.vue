<template>
  <view class="home-box">
    <view class="home-header-box"
      ><SearchCom homeSearch @inputClick="searchClick"></SearchCom>
      <HeaderTabs
        :list="headerTabsList"
        :current.sync="tabsCurrent"
      ></HeaderTabs
    ></view>
    <view class="home-content-box">
      <view
        v-for="(tab, i) in headerTabsList"
        :key="i"
      >
        <CommonPageVue
          v-show="tabsCurrent === i"
          :currentTab="tab"
        ></CommonPageVue>
      </view>
    </view>
  </view>
</template>

<script>
import HeaderTabs from "./components/HeaderTabs/index.vue"
import CommonPageVue from "./components/CommonPage/CommonPage.vue"
import { articleCategoryApi } from "@/api/modules/article"
export default {
  name: "HomeCom",
  components: {
    HeaderTabs,
    CommonPageVue
  },
  data() {
    return {
      headerTabsList: [],
      tabsCurrent: 0
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
      const data = await articleCategoryApi({ level: 2 })
      if (data.code === 0) {
        this.headerTabsList = data.data.map(item => {
          return {
            ...item,
            name: item.categoryName
          }
        })
        this.headerTabsList.unshift(
          ...[
            {
              name: "关注",
              badge: {
                isDot: true
              }
            },
            {
              name: "推荐",
              badge: {
                isDot: true
              }
            }
          ]
        )
        this.tabsCurrent = 1
      }
    },
    searchClick() {
      uni.navigateTo({
        url: "/pages/Search/Search"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home-box {
  .home-header-box {
    box-shadow: 0px 1px 10px 4px #eee;
  }
  .home-content-box {
    position: absolute;
    overflow: auto;
    left: 0;
    right: 0;
    bottom: 0;
    top: 90px;
    padding: 0 6px;
  }
}
</style>
