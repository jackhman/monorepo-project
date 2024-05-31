<template>
  <view class="personal-info">
    <view class="avatar-box">
      <image class="avatar-u-box avatar-item" :src="userInfo.avatar"></image>
      <button
        class="avatar-btn avatar-item"
        open-type="chooseAvatar"
        @chooseavatar="chooseavatar"
      ></button>
    </view>
    <view class="personal-info-nickName" @click="nickNameClick">
      <input
        type="nickname"
        class="text"
        @blur="nickNameConfirm"
        :value="userInfo.nickName"
      />
      <u-icon name="edit-pen-fill" size="22"></u-icon>
    </view>
  </view>
</template>

<script>
import { mapState, mapActions } from "vuex"
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
    ...mapActions({
      ACT_updateUserInfo: "user/ACT_updateUserInfo"
    }),
    nickNameConfirm(e) {
      const { value } = e.detail
      const params = {
        nickName: value
      }
      if (this.userInfo.nickName !== value) {
        this.ACT_updateUserInfo(params)
      }
    },
    chooseavatar(e) {
      const { avatarUrl } = e.detail
      console.log(e)
      wx.getFileSystemManager().readFile({
        //读取本地文件内容
        filePath: avatarUrl, // 文件路径
        encoding: "base64", // 返回格式
        success: ({ data }) => {
          const params = {
            avatar: "data:image/png;base64," + data
          }
          console.log(params)
          // this.ACT_updateUserInfo(params)
        },
        fail: error => {
          console.log("fail", error)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.personal-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0 0 5px #eee;
  padding: 6px 0;
  .avatar-box {
    position: relative;
    width: 40px;
    height: 40px;
    .avatar-item {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
    }
    .avatar-u-box {
      z-index: 0;
      border-radius: 50%;
    }
    .avatar-btn {
      z-index: 1;
      background-color: transparent;
      &::after {
        display: none;
      }
    }
  }
  .personal-info-nickName {
    display: flex;
    align-items: center;
  }
}
</style>
