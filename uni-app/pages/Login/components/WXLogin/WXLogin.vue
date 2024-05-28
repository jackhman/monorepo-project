<template>
	<view>
		<u-button openType="getUserInfo" type="success" text="微信登录" @click="wxLoginClick"></u-button>
		<LoadingCom :loading="loading" text="登录中..."></LoadingCom>
	</view>
</template>

<script>
	import {
		wxLoginApi
	} from "@/api/modules/user"
	import { StorageConst } from "@/utils/modules/constVariable.js"
	export default {
		data() {
			return {
				loading: false
			}
		},
		onReady() {},
		methods: {
			wxLoginClick() {
				this.loading = true
				uni.login({
					success: res => {
						if (res.errMsg === "login:ok") {
							wxLoginApi({
									code: res.code
								})
								.then(result => {
									console.log(result, "result")
									if (result) {
										uni.setStorageSync(StorageConst.openid, result.data.openid)
										uni.setStorageSync(StorageConst.session_key, result.data.session_key)
										uni.setStorageSync(StorageConst.token, `Bearer ${result.data.token}`)
										uni.switchTab({
											url: "/pages/Layout/Home/index"
										})
									} else {
										uni.showToast({
											title: "登录失败。。。",
											icon: "error"
										})
									}
								})
								.catch(err => {
									console.log(err)
								})
								.finally(() => {
									this.loading = false
								})
						}
					},
					fail: error => {
						console.log(error)
						this.loading = false
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped></style>