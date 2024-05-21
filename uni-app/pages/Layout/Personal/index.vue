<template>
	<view>
		<u-modal :show="show" title="确定退出？" showCancelButton closeOnClickOverlay content='注意哟!!!退出后部分功能不可用' @confirm="logoutClick"
			@cancel="show = false" @close="show = false"></u-modal>
		<button @click="show = true">退出登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		},
		methods: {
			// 退出登录
			logoutClick() {
				uni.redirectTo({
					url: "/pages/Login/index"
				})
			}
		}
	}
</script>

<style>

</style>