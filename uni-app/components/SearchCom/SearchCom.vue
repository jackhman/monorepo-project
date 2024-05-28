<template>
  <view class="search-com">
    <view class="search-input-box">
      <view class="search-content">
        <u--input
          placeholder="请输入内容..."
          prefixIcon="search"
          prefixIconStyle="font-size: 22px;color: #909399"
          clearable
          :readonly="homeSearch"
          shape="circle"
        ></u--input>
        <!-- 占位盒子 -->
        <view v-if="homeSearch" class="search-perch-box" @click="perchBoxClick">
        </view>
      </view>
      <!-- #ifdef WEB || APP-PLUS -->
      <view class="create-btn" v-if="homeSearch" @click="createClick"
        ><u-icon name="plus-circle" size="26px"></u-icon
      ></view>
      <!-- #endif -->
    </view>
    <view></view>
  </view>
</template>

<script>
export default {
  name: "SearchCom",
  props: {
    // 判断是否是首页的搜索，首页的搜索只是展示
    homeSearch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    perchBoxClick() {
      this.$emit("inputClick")
    },
    createClick() {
			uni.navigateTo({
				url:"/pages/Create/Create"
			})
    }
  }
}
</script>

<style lang="scss" scoped>
.search-com {
  position: relative;
  height: 100rpx;
}
.search-input-box {
  width: 95%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  .search-content {
    position: relative;
    width: 100%;
    .search-perch-box {
      flex: 1;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
    }
  }

  .create-btn {
    width: 60rpx;
    text-align: center;
    margin-left: 10rpx;
  }
}
</style>
