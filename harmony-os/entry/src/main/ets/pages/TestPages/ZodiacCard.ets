interface ImageCount {
  count: number,
  url: string
}

interface ImageStatus {
  // 透明度
  opacity: number,
  // 缩放
  x: number,
  y: number
}


@Entry
@Component
struct ZodiacCard {
  @State images: ImageCount[] = [
    { count: 0, url: '/assets/images/ZodiacCard/bg_00.png' },
    { count: 0, url: '/assets/images/ZodiacCard/bg_01.png' },
    { count: 0, url: '/assets/images/ZodiacCard/bg_02.png' },
    { count: 0, url: '/assets/images/ZodiacCard/bg_03.png' },
    { count: 0, url: '/assets/images/ZodiacCard/bg_04.png' },
    { count: 0, url: '/assets/images/ZodiacCard/bg_05.png' },
  ]
  @State imageStatus: ImageStatus = {
    opacity: 0,
    x: 1,
    y: 0
  }
  @State randomIndex: number = -1

  // 获得大奖手机的
  @State isGet: boolean = false
  prizeList: string[] = ['hw', 'xm', 'pg']
  @State prizeRandom: number = -1

  build() {
    Stack() {
      // 卡片部分
      Column() {
        Grid() {
          ForEach(this.images, (item: ImageCount) => {
            GridItem() {
              Badge({
                count: item.count,
                position: BadgePosition.RightTop,
                style: {
                  badgeSize: 20,
                }
              }) {
                Image(item.url)
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
          .onClick(() => {
            this.randomIndex = Math.floor(Math.random() * 6)
            this.imageStatus = {
              opacity: 1,
              x: 1,
              y: 1
            }
          })
      }
      .padding({
        top: 60
      })
      .width('100%')
      .height('100%')

      // 抽出来的卡片弹出框
      Column() {
        Image(`/assets/images/ZodiacCard/img_0${this.randomIndex}.png`)
          .width(200)
          .scale({
            x: this.imageStatus.x,
            y: this.imageStatus.y
          })
          .animation({
            duration: 200
          })

        Button('开心收下')
          .margin({
            top: 40
          })
          .width(200)
          .height(40)
          .fontColor('#fff')
          .border({
            width: 2,
            color: '#eee',
            radius: 20
          })
          .backgroundColor(Color.Transparent)
          .onClick(() => {
            this.images[this.randomIndex] = {
              url: `/assets/images/ZodiacCard/img_0${this.randomIndex}.png`,
              count: this.images[this.randomIndex].count + 1
            }
            this.imageStatus = {
              opacity: 0,
              x: 0,
              y: 0
            }
            const getFind = this.images.every(item => item.count !== 0)
            if (getFind) {
              this.isGet = true
            }
            this.prizeRandom = Math.floor(Math.random() * 3)
          })

      }
      .visibility(this.imageStatus.opacity ? Visibility.Visible : Visibility.Hidden)
      .justifyContent(FlexAlign.Center)
      .width("100%")
      .height('100%')
      .backgroundColor('#cc000000')
      .animation({
        duration: 500
      })

      // 大奖的弹出框
      if (this.isGet) {
        Column({ space: 30 }) {
          Text('恭喜，获得手机一部!!!')
            .fontSize(22)
            .fontColor(Color.White)
            .fontWeight(700)
          Image(`/assets/images/ZodiacCard/${this.prizeList[this.prizeRandom]}.png`)
            .width(300)
          Button('再来一次')
            .onClick((event: ClickEvent) => {
              this.images = [
                { count: 0, url: '/assets/images/ZodiacCard/bg_00.png' },
                { count: 0, url: '/assets/images/ZodiacCard/bg_01.png' },
                { count: 0, url: '/assets/images/ZodiacCard/bg_02.png' },
                { count: 0, url: '/assets/images/ZodiacCard/bg_03.png' },
                { count: 0, url: '/assets/images/ZodiacCard/bg_04.png' },
                { count: 0, url: '/assets/images/ZodiacCard/bg_05.png' },
              ]
              this.isGet = false
              this.prizeRandom = -1
            })
            .width(200)
            .backgroundColor(Color.Transparent)
            .fontSize(14)
            .fontColor(Color.White)
            .border({
              width: 2,
              color: '#eee',
              radius: 20
            })
        }
        .justifyContent(FlexAlign.Center)
        .width("100%")
        .height('100%')
        .backgroundColor('#cc000000')
      }

    }
  }
}