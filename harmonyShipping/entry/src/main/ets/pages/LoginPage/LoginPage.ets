import router from '@ohos.router'
@Entry
@Component
struct LoginPage {
  @State message: string = '登录'

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .onClick(()=> {
            router.pushUrl({
              url: "pages/HomePage/HomePage"
            })
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}