<template>
  <view class="personal-page">
    <PersonalInfoVue></PersonalInfoVue>
    <u-modal
      :show="show"
      title="确定退出？"
      showCancelButton
      closeOnClickOverlay
      content="注意哟!!!退出后部分功能不可用"
      @confirm="logoutClick"
      @cancel="show = false"
      @close="show = false"
    ></u-modal>
    <button @click="show = true">退出登录</button>
    <LoadingCom :loading="loading"></LoadingCom>
  </view>
</template>

<script>
import { mapState } from "vuex"
import { handleLogout } from "@/utils"
import PersonalInfoVue from "./components/PersonalInfo.vue"
export default {
  name: "PersonalPage",
  components: {
    PersonalInfoVue
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapState({
      loading: state => state.app.loading
    })
  },
  methods: {
    // 退出登录
    logoutClick() {
      uni.redirectTo({
        url: "/pages/Login/index",
        success: () => {
          handleLogout(false)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.personal-page {
  padding: $base-page-pad;
}
</style>
