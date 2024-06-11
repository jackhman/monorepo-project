@Entry
@Component
struct MocoDog {
  build() {
    Column() {
      // 头部VIP
      Text('VIP')
        .position({
          x: 9,
          y: 0
        })
        .zIndex(1)
        .borderRadius({
          topLeft: 10,
          bottomRight: 10
        })
        .border({
          width: 2,
          color:"#fff0a4"
        })
        .backgroundColor("#f3922d")
        .padding({
          top: 2,
          left: 5,
          right: 5,
          bottom: 2
        })
        .fontSize(12)
        .fontColor("#fff0a4")
        .fontStyle(FontStyle.Italic)
        .fontWeight(700)


      Image($r('app.media.position_moco'))
        .height(210)
        .borderRadius(10)
        .margin({ bottom: 5 })

      Row() {
        Image($r('app.media.position_earphone'))
          .backgroundColor('#11c0fc')
          .padding(3)
          .fillColor("#fff")
          .margin({ left: 10, right: 10 })
          .width(20)
          .borderRadius(10)

        Text('飞狗MOCO')
          .fontWeight(700)
          .fontSize(14)
      }
      .width(168)
    }
  }
}