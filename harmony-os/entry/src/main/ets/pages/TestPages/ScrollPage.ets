@Entry
@Component
struct ScrollPage {

  myScroll: Scroller = new Scroller()

  build() {
    Column() {
      Scroll(this.myScroll) {
        Column({ space: 10 }) {
          ForEach(Array.from({ length: 10 }), (item, i) => {
            Text(`测试文本${i + 1}`)
              .width('100%')
              .height(200)
              .backgroundColor(Color.Pink)
              .textAlign(TextAlign.Center)
              .margin(10)
              .fontSize(20)
              .borderRadius(20)
          })
        }.width('100%')
      }
      .width('100%')
      .height(500)


      Button('回到顶部')
        .margin(20)
        .onClick((event: ClickEvent) => {
          this.myScroll.scrollEdge(Edge.Top)
      })

      Button('获取当前滚动条的位置')

        .onClick((event: ClickEvent) => {
          const currentOffset = this.myScroll.currentOffset()

          AlertDialog.show({
            message: `当前的距离${currentOffset.yOffset}`
          })

      })
    }
    .width('100%')
    .height('100%')
    .backgroundColor(0xDCDCDC)
  }
}