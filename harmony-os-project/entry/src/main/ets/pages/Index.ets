@Entry
@Component
struct Index {
  @State message: string = 'Hello World'

  build() {
    Column() {
      Row() {
        Text("小说简介").fontColor(Color.Pink).fontSize(50)
      }.width('100%')

      Row() {
        Text("情感传智教育·黑马程序员研究院全新录制的鸿蒙教程,情感传智教育·黑马程序员研究院全新录制的鸿蒙教程,情感传智教育·黑马程序员研究院全新录制的鸿蒙教程")
          .backgroundColor(Color.Gray)
          .textOverflow({ overflow: TextOverflow.Ellipsis })
          .maxLines(2)
          .padding({ top: 10, right: 10, left: 10, bottom: 20 })
          .border({ width: 1, color: Color.Pink, radius: 6 })
      }.width('100%')

      Row() {
        Image($r('app.media.icon'))
          .borderRadius(50)
          .width(50)
          .height(50)
      }

      Column({ space: 20 }) {
        TextInput({ placeholder: "请输入用户名" }).type(InputType.Normal)
        TextInput({ placeholder: "请输入密码" }).type(InputType.Password)
        Button('登录').width('100%')
        Row() {
          Text('前往注册')
          Text("|").margin({ right: 10, left: 10 }).fontColor("#ffe6e6e6")
          Text('忘记密码')
        }
      }.padding(12)

      // 背景图片
      Column() {
        Text("这是一段文字").fontColor(Color.Yellow)
      }
      .height(200)
      .width(200)
      .backgroundImage($r("app.media.ikun"), ImageRepeat.XY)
      .backgroundImageSize({width: 50, height: 50})

    }.width('100%')
    .height('100%')
  }
}
