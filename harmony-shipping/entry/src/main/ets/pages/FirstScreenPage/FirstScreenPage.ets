import { router } from '@kit.ArkUI'

@Entry
@Component
struct FirstScreenPage {
  @State time: number = 5
  img: ResourceStr = $r('app.media.400x400')
  interval: number = 0

  aboutToAppear(): void {
    this.interval = setInterval(() => {
      console.log("88888")
      if (this.time === 0) {
        this.jump()
      }
      this.time--
    }, 1000)
  }

  jump() {
    clearInterval(this.interval)
    router.replaceUrl({
      url: "pages/HomePage/HomePage"
    })
  }

  build() {
    Column() {
      Image(this.img)
        .width('100%')
        .height('100%')
        .objectFit(ImageFit.Cover)

      Text(`${this.time}s 跳过`)
        .fontSize(14)
        .position({
          right: 10,
          top: 10
        })
        .border({
          width: 1,
          color:"#eee",
          radius: 20
        })
        .padding(8)
        .onClick(() => {
          this.jump()
        })
    }
    .width('100%')
    .height('100%')
  }
}