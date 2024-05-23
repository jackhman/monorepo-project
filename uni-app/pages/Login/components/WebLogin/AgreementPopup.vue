<template>
	<u-popup :show="show" style="margin: 0 30px;background-color: transparent;">
		<view class="popup-content">
			<view class="content-box">
				<view class="popue-title">
					{{argeementType === ARGEEMENT_TYPE_COM.User ? '用户协议' : '隐私协议'}}
				</view>
				<view class="popup-text">
					晴天 (Live) - 周杰伦 (Jay Chou)

					词：周杰伦

					曲：周杰伦

					故事的小黄花 从出生那年就飘着

					童年的荡秋千 随记忆一直晃到现在

					Re So So Si Do Si La So La

					Si Si Si Si La Si La So

					吹着前奏望着天空

					我想起花瓣试着掉落

					为你翘课的那一天 教室的那一间

					下雨的那一天 我怎么看不见

					消失的下雨天 我好想再淋一遍

					没想到失去的勇气我还留着

					好想再问一遍 你会等待还是离开

					刮风这天 我试过握着你手

					但偏偏 雨渐渐 大到我看你不见

					还要多久 我才能在你身边

					等到放晴的那天 也许我会比较好一点

					从前从前 有个人爱你很久

					但偏偏 风渐渐 把距离吹得好远

					好不容易 又能再多爱一天

					但故事的最后 你好像还是说了拜拜

					为你翘课的那一天 花落的那一天

					教室的那一间 我怎么看不见

					消失的下雨天 我好想再淋一遍

					没想到失去的勇气我还留着

					好想再问一遍 你会等待还是离开

					刮风这天 我试过握着你手

					但偏偏 雨渐渐 大到我看你不见

					还要多久 我才能在你身边

					等到放晴的那天 也许我会比较好一点

					从前从前 有个人爱你很久

					但偏偏 风渐渐 把距离吹得好远

					好不容易 又能再多爱一天

					但故事的最后 你好像还是说了拜拜

					刮风这天 我试过握着你手

					但偏偏 雨渐渐 大到我看你不见

					还要多久 我才能够在你身边

					等到放晴的那天 也许 我会比较好一点

					从前从前 有个人爱你很久

					但偏偏 风渐渐 把距离吹得好远

					好不容易 又能再多爱一天

					但故事的最后 你好像还是说了拜拜
				</view>
				<view class="confirm-btn" @click="confirmBtn">
					确定
				</view>
			</view>
		</view>
	</u-popup>
</template>

<script>
	import {
		ARGEEMENT_TYPE
	} from './type'
	export default {
		props: {
			argeementType: {
				required: true,
				type: String
			},
			argeementTimeStamp: {
				required: true
			}
		},
		computed: {
			ARGEEMENT_TYPE_COM() {
				return ARGEEMENT_TYPE
			}
		},
		data() {
			return {
				show: false
			};
		},
		methods: {
			// 弹出框开启
			open() {
				this.show = true
			},
			// 弹出框关闭
			confirmBtn() {
				this.show = false
			}

		},
		watch: {
			argeementTimeStamp() {
				this.open()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.popup-content {
		display: flex;
		justify-content: center;

		.content-box {
			width: 90%;
			border-radius: 20rpx;
			background-color: #fff;
		}

		.popue-title {
			font-size: 32rpx;
			font-weight: 700;
			padding: 20rpx 0;
		}

		.popup-text {
			padding: 30rpx;
			font-size: 26rpx;
			max-height: 90%;
			overflow: auto;
		}

		.confirm-btn {
			color: $uni-color-primary;
			font-size: 30rpx;
			padding: 30rpx 0;
			box-shadow: 0 -6rpx #eee;
		}
	}
</style>