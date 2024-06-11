@Entry
@Component
struct BzVideo {
  build() {
    Column() {
      Column() {
        Stack({
          alignContent: Alignment.Bottom
        }) {
          Image($r('app.media.bz_img'))
            .width('100%')
            .borderRadius({
              topLeft: 10,
              topRight: 10
            })

          Row() {
            Row() {
              Image($r('app.media.bz_play'))
                .width(12)
                .fillColor(Color.White)
                .margin({
                  right: 5
                })

              Text("288万")
                .fontColor("#fff")
                .fontSize(12)
            }
            .margin({
              right: 10
            })

            Row() {
              Image($r('app.media.bz_msg'))
                .width(12)
                .fillColor(Color.White)
                .margin({
                  right: 5
                })

              Text("8655")
                .fontColor("#fff")
                .fontSize(12)
            }

            Blank()

            Text("4:33")
              .fontColor("#fff")
              .fontSize(12)

          }
          .width('100%')
          .padding({
            left: 5,
            right: 5
          })
        }


        Text("全网首发黑马程序员鸿蒙 HarmonyOS NEXT星河版零基础入门到实战，零基础也能快速入门鸿蒙开发教程")
          .maxLines(2)
          .textOverflow({
            overflow: TextOverflow.Ellipsis
          })
          .lineHeight(16)
          .fontSize(14)
          .margin({
            top: 5,
            bottom: 20
          })


        Row() {
          Text("19万点赞")
            .fontSize(12)
            .fontColor("#c07b63")
            .backgroundColor('#fff1f2')
            .padding({
              top: 2,
              bottom: 2,
              left: 5,
              right: 5
            })

          Image($r('app.media.bz_more'))
            .width(10)
            .fillColor(Color.Gray)
        }
        .padding({
          left: 5,
          right: 5
        })
        .width("100%")
        .justifyContent(FlexAlign.SpaceBetween)
      }
      .width(200)
      .height(200)
      .backgroundColor("#fff")
      .borderRadius(10)

    }
    .width('100%')
    .height('100%')
    .padding({
      top: 10
    })
    .backgroundColor(Color.Gray)
  }
}