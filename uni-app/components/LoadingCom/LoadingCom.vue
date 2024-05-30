<template>
  <view class="modal-com">
    <u-popup
      :show="show"
      @open="loadingOpen"
      @close="loadingClose"
      :round="10"
      mode="center"
      :safeAreaInsetBottom="false"
    >
      <view class="loader-box">
        <view class="loader"></view>
        <text class="loader-text">{{ text }}</text>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  name: "LoadingCom",
  props: {
    loading: {
      type: Boolean,
      required: true,
      default: false
    },
    text: {
      type: String,
      required: false,
      default: "加载中..."
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    // 开启
    loadingOpen() {
      this.$emit("loadingOpen")
    },
    // 关闭
    loadingClose() {
      this.$emit("update:loading", false)
    }
  },
  watch: {
    loading(val) {
      this.show = val
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-com {
  .loader-box {
    width: 250rpx !important;
    height: 260rpx;
    position: relative;

    .loader-text {
      position: absolute;
      bottom: 10px;
      left: 0;
      right: 0;
      text-align: center;
    }
  }
}

.loader {
  position: relative;
  width: 2.5em;
  height: 2.5em;
  transform: rotate(165deg);
}

.loader:before,
.loader:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.5em;
  height: 0.5em;
  border-radius: 0.25em;
  transform: translate(-50%, -50%);
}

.loader:before {
  animation: before8 2s infinite;
}

.loader:after {
  animation: after6 2s infinite;
}

@keyframes before8 {
  0% {
    width: 0.5em;
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75),
      -1em 0.5em rgba(111, 202, 220, 0.75);
  }

  35% {
    width: 2.5em;
    box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75),
      0 0.5em rgba(111, 202, 220, 0.75);
  }

  70% {
    width: 0.5em;
    box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75),
      1em 0.5em rgba(111, 202, 220, 0.75);
  }

  100% {
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75),
      -1em 0.5em rgba(111, 202, 220, 0.75);
  }
}

@keyframes after6 {
  0% {
    height: 0.5em;
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75),
      -0.5em -1em rgba(233, 169, 32, 0.75);
  }

  35% {
    height: 2.5em;
    box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75),
      -0.5em 0 rgba(233, 169, 32, 0.75);
  }

  70% {
    height: 0.5em;
    box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75),
      -0.5em 1em rgba(233, 169, 32, 0.75);
  }

  100% {
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75),
      -0.5em -1em rgba(233, 169, 32, 0.75);
  }
}

.loader {
  position: absolute;
  top: calc(50% - 1.25em);
  left: calc(50% - 1.25em);
}
</style>
