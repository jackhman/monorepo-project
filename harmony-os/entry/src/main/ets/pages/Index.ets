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
        }.margin({ bottom: 20 })
      }

      // 背景图片
      Column() {
        Text("你也是小黑子吗").fontColor(Color.Red).fontWeight(FontWeight.Bolder)
      }
      .height(200)
      .width(200)
      .justifyContent(FlexAlign.Center)
      .backgroundImage($r("app.media.ikun"), ImageRepeat.XY)
      .backgroundImageSize({ width: 50, height: 50 })


      // 综合案例
      Column() {
        Row() {
          Column() {
            Text("玩一玩").fontWeight(FontWeight.Bolder).fontSize(20).margin({ bottom: 10 })
            Row() {
              Text("签到兑礼").fontColor(Color.Gray).border({ width: { right: 1 }, color: "#ddd" })
                .margin({ right: 10 }).padding({ right: 10 })
              Text("超多大奖 超好玩").fontColor(Color.Gray)
            }
          }
          .justifyContent(FlexAlign.Start)
          .alignItems(HorizontalAlign.Start)

          Row() {
            Image($r("app.media.400x400")).width(50).height(60).margin({ right: 10 })
            Image($r("app.media.ic_arrow_right")).width(24)
          }
        }
        .height(100)
        .width('100%')
        .justifyContent(FlexAlign.SpaceBetween)
        .border({ width: 4, color: "#ddd", radius: 6 })
        .padding(12)
        .margin({ top: 20, bottom: 20 })
      }

    }.width('100%')
    .height('100%')
    .padding(6)
  }
}
