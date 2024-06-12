@Entry
@Component
struct MTShopCar {
  @State count: number = 1
  @State nowPrice: number = 10.40
  @State oldPrice: number = 40.40

  build() {
    Column() {
      Stack({
        alignContent: Alignment.Bottom
      }) {
        // 产品
        Row() {
          Image($r('app.media.jd_logo'))
            .width(160)
            .height(90)
            .borderRadius(6)
          Column() {
            Text('黑马程序员研究院全新录制的鸿蒙教程')
              .maxLines(1)
              .textOverflow({
                overflow: TextOverflow.Ellipsis
              })
              .fontSize(14)
            Text('含一份折扣商品')
              .fontSize(12)
              .fontColor('#ccc')

            Row() {
              Text() {
                Span("¥")
                  .fontSize(12)
                  .fontColor('#ff9090')
                Span(this.nowPrice.toFixed(2))
                  .fontColor('#ff9090')
              }
              .margin({
                right: 5
              })

              Text() {
                Span("¥")
                Span(this.oldPrice.toFixed(2))
              }
              .fontSize(12)
              .fontColor('#ccc')
              .decoration({
                type: TextDecorationType.LineThrough
              })

              Blank()

              Row() {
                Text('-')
                  .onClick(() => {
                    this.count--
                  })
                Text(this.count.toString())
                  .margin({
                    left: 10,
                    right: 10
                  })
                Text('+')
                  .onClick(() => {
                    this.count++
                  })
              }

            }
            .padding({
              left: 10
            , right: 10
            })
            .width("100%")
          }
          .height(60)
          .alignItems(HorizontalAlign.Start)
          .justifyContent(FlexAlign.SpaceBetween)
          .layoutWeight(1)
        }
        .width("100%")
        .borderRadius(6)
        .backgroundColor('#fff')
        .position({
          x: 0,
          y: 0
        })

        // 底部结算
        Column() {
          Text(`当前共有${this.count}件商品`)
          Text(`商品总价格${(this.count * this.nowPrice).toFixed(2)}`)
          Text(`商品共减免${(this.count * (this.oldPrice - this.nowPrice)).toFixed(2)}`)
            .fontSize(18)
        }
        .backgroundColor(Color.White)
        .height(100)
        .width('100%')
        .borderRadius(6)
      }.width('100%')
      .height('100%')
    }
    .width('100%')
    .height('100%')
    .padding(10)
    .backgroundColor('#f3f3f3')
  }
}