@Extend(TextInput) function textInputExtend() {
  .height(50)
  .borderRadius(50)

}

@Extend(Image) function loginTypeExtend() {
  .width(30)
}

@Entry
@Component
struct LoginPage {
  @State username: string = ''
  @State password: string = ''

  build() {
    Column() {
      Column() {
        Image($r("app.media.app_logo"))
          .width(60)
          .margin({
            bottom: 20
          })
        Text('欢迎登录')
          .fontSize(24)
          .fontWeight(700)
          .fontColor('#333')
      }

      Column({ space: 10 }) {
        TextInput({ placeholder: '请输入用户名', text: this.username })
          .textInputExtend()
          .onChange((value: string) => {
            this.username = value
          })

        TextInput({ placeholder: '请输入密码',text: this.password })
          .textInputExtend()
          .type(InputType.Password)
          .onChange((value: string) => {
            this.password = value
          })
          .onSubmit(()=> {

          })
      }
      .padding(16)

      Row({ space: 60 }) {
        Image($r('app.media.wechat'))
          .loginTypeExtend()
        Image($r('app.media.huawei'))
          .loginTypeExtend()
        Image($r('app.media.qq'))
          .loginTypeExtend()
      }
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}