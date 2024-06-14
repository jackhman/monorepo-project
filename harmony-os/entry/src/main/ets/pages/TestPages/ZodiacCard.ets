@Entry
@Component
struct ZodiacCard {
  build() {
    Column() {
      Grid() {
        ForEach([1, 2, 3, 4, 5, 6], (item, index) => {
          GridItem() {
            Badge({
              count: 2,
              position: BadgePosition.RightTop,
              style: {
                badgeSize: 20,
              }
            }) {
              Image(`/assets/images/ZodiacCard/bg_0${index}.png`)
                .width(80)
            }
          }

        })
      }
      .columnsTemplate('1fr 1fr 1fr')
      .rowsTemplate('1fr 1fr')
      .width('100%')
      .height(300)

      Text('立即抽卡')
        .margin({
          top: 50
        })
        .backgroundColor('#de668d')
        .width(200)
        .textAlign(TextAlign.Center)
        .fontColor(Color.White)
        .borderRadius(20)
        .height(40)
    }
    .padding({
      top: 120
    })
  }
}