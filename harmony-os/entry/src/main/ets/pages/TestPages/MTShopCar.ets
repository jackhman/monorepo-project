// @ts-nocheck
@Entry
@Component
struct MTShopCar{
  @State count: number = 1
  @State nowPrice: number = 10.40
  @State oldPrice: number = 40.40
  build(){
    Column(){
      // 产品
      Row(){
        Image($r('app.media.jd_logo'))
          .width(160)
          .height(90)
          .borderRadius(6)
        Column(){
          Text('黑马程序员研究院全新录制的鸿蒙教程')
            .maxLines(1)
            .textOverflow({
              overflow: TextOverflow.Ellipsis
            })
            .fontSize(14)
          Text('含一份折扣商品')
            .fontSize(12)
            .fontColor('#eee')

          Row(){
            Text() {
              Span("¥")
              Span(this.nowPrice)
            }
            Text() {
              Span("¥")
              Span(this.oldPrice)
            }
            .fontSize(12)
            .fontColor('#eee')
            .textCase()
            .decoration({
              type: TextDecorationType.Overline
            })

          }
        }
        .alignItems(HorizontalAlign.Start)
        .layoutWeight(1)
      }
      .width("100%")
      .backgroundColor('#fff')
    }
    .width('100%')
    .height('100%')
    .padding(10)
    .backgroundColor('#f3f3f3')
  }
}