@Entry
@Component
struct JdLogin {
  build() {
    Column() {
      // 头部
      Row() {
        Image($r("app.media.ic_cancel"))
          .width(20)
        Text("帮助")
      }
      .width('100%')
      .justifyContent(FlexAlign.SpaceBetween)

      // logo
      Image($r('app.media.jd_logo')).width(250)

      // 输入框
      Column() {
        Row() {
          Text("国家/地址")
            .fontColor("#aaa")
          Row() {
            Text("中国(+86)")
              .fontColor("#aaa")
              .margin({ right: 5 })
            Image($r('app.media.ic_arrow_right'))
              .width(20)
              .fillColor("#aaa")
          }
        }
        .backgroundColor("#fff")
        .width("100%")
        .height(40)
        .borderRadius(20)
        .justifyContent(FlexAlign.SpaceBetween)
        .padding({ left: 20, right: 10 })

        TextInput({
          placeholder: "请输入手机号"
        })
          .width('100%')
          .height(40)
          .backgroundColor("#fff")
          .margin({ top: 25, bottom: 25 })
          .placeholderColor('#aaa')

        Row() {
          Checkbox()
            .width(10)
          Text() {
            Span("我已经阅读并同意")
            Span("《京东隐私政策》")
              .fontColor('#00aeec')
              .fontSize(12)
            Span("《京东用户服务协议》")
              .fontColor('#00aeec')
              .fontSize(12)
            Span("未注册的手机号将自动创建京东账号")
          }
          .fontSize(12)
          .fontColor("#aaa")
          .layoutWeight(1)
        }
        .alignItems(VerticalAlign.Top)

        Button("登录")
          .width("100%")
          .backgroundColor("#c02838")
          .margin({ top: 25, bottom: 25 })

        Row({ space: 25 }) {
          Text("新用户注册")
            .fontSize(12)
            .fontColor("#aaa")
          Text("账户密码登录")
            .fontSize(12)
            .fontColor("#aaa")
          Text("无法登录")
            .fontSize(12)
            .fontColor("#aaa")
        }
      }

      // 其他登录方式
      Blank()
      Column(){
        Text("其他登录方式")
        .fontColor("#aaa")
        .fontSize(12)
        Row({space: 50}){
          Image($r("app.media.logo_red"))
            .width(25)
          Image($r("app.media.wechat"))
            .width(25)
            .fillColor('#5ca248')
          Image($r("app.media.QQ"))
            .width(25)
          Image($r("app.media.weibo"))
            .width(25)
            .fillColor('#bf493e')
        }
        .margin({
          top: 15
        })
      }
      .margin({
        bottom: 50
      })
    }
    .padding(10)
    .width('100%')
    .height('100%')
    .backgroundImage($r('app.media.jd_login_bg'))
    .backgroundImageSize(ImageSize.Cover)
  }
}