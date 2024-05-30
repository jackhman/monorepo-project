<template>
  <view class="personal-info">
    <view class="personal-info-avater">
      <u-avatar :src="userInfo.avatar"></u-avatar>
    </view>
    <view class="personal-info-nickName">{{ userInfo.nickName }}</view>
  </view>
</template>

<script>
import { mapState } from "vuex"
export default {
	name: "PersonalInfo",
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapState("user", {
      userInfo: state => state.userInfo
    })
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.personal-info {

}
</style>
