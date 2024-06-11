@Entry
@Component
struct ZFBPages {
  build() {
    Column() {

      Stack({ alignContent: Alignment.Bottom }) {

        // 上面的内容部分
        Stack({ alignContent: Alignment.Top }) {
          // 搜索部分
          Row() {
            Column() {
              Text('北京')
                .fontSize(16)
                .fontColor('#fff')
              Text('晴 2℃')
                .fontSize(12)
                .fontColor('#fff')
              Image($r('app.media.ic_arrow_down_0'))
                .width(14)
                .fillColor("#fff")
                .position({
                  x: 35,
                  y: 0
                })
            }

            // 中间部分
            Row() {
              Image($r('app.media.zfb_head_search'))
                .width(20)
                .fillColor('#ccc')
                .margin({
                  right: 5
                })

              Text('北京交通一卡通')
                .fontColor('#ccc')
                .fontSize(14)
                .layoutWeight(1)

              Text('搜索')
                .fontSize(14)
                .fontColor('#5675e9')
                .textAlign(TextAlign.Center)
                .fontWeight(700)
                .border({
                  width: { left: 1 },
                  color: "#ccc"
                })
                .padding({
                  left: 10
                })
            }
            .layoutWeight(1)
            .height(30)
            .borderRadius(6)
            .backgroundColor("#fff")
            .padding({
              left: 10,
              right: 10
            })
            .margin({
              left: 20,
              right: 10
            })

            // 添加按钮
            Image($r('app.media.zfb_head_plus'))
              .width(20)
              .fillColor('#fff')
          }
          .padding({
            left: 10,
            right: 10
          })
          .width('100%')
          .height(60)
          .backgroundColor('#5b73e1')
          .zIndex(999)

          // 页面主体部分
          Scroll() {
            Column() {
              // 卡片部分

            }
            .width('100%')
            .padding({
              top: 60,
              bottom: 60
            })
          }
          .height('100%')
        }

        // 底部
        Row() {
          Column() {
            Image($r('app.media.zfb_tab_home'))
              .width(24)
          }.layoutWeight(1)

          Column() {
            Image($r('app.media.zfb_tab_money'))
              .width(20)
              .margin({
                bottom: 5
              })
            Text('理财')
              .fontSize(12)
          }.layoutWeight(1)

          Column() {
            Image($r('app.media.zfb_tab_life'))
              .width(20)
              .margin({
                bottom: 5
              })
            Text('生活')
              .fontSize(12)
          }.layoutWeight(1)

          Column() {
            Image($r('app.media.zfb_tab_chat'))
              .width(20)
              .margin({
                bottom: 5
              })
            Text('消息')
              .fontSize(12)
          }.layoutWeight(1)

          Column() {
            Image($r('app.media.zfb_tab_me'))
              .width(20)
              .margin({
                bottom: 5
              })
            Text('我的')
              .fontSize(12)
          }.layoutWeight(1)
        }
        .width('100%')
        .height(60)
        .backgroundColor(Color.White)
      }
      .width("100%")
      .height('100%')
      .backgroundColor(Color.Pink)
    }
  }
}