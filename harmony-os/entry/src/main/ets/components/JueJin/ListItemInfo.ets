const textColor: string = '#aaa'

@Component
struct ListItemInfo {
  build() {
    Column() {
      Row() {
        Image('/assets/images/JueJin/icon.png')
          .width(30)
          .borderRadius(50)

        Text('小火车况且况且')
          .fontSize(16)
          .fontColor(textColor)
          .margin({
            left: 6,
            right: 6
          })

        Image('/assets/images/JueJin/level_6.png')
          .width(30)
      }
      .alignItems(VerticalAlign.Center)

      Column() {
        Text('我是评论的内容我是评论的内容我是评论的内容我是评论的内容我是评论的内容我是评论的内容我是评论的内容我是评论的内容我是评论的内容我是评论的内容')
          .textOverflow({
            overflow: TextOverflow.Ellipsis
          })
          .maxLines(2)
          .margin({
            top: 10,
            bottom: 10
          })
        Row() {
          Text('三天前')
            .fontColor(textColor)
          Row() {
            Image('/assets/images/JueJin/like_unselect.png')
              .width(20)
              .margin({
                right: 3
              })
            Text('99')
              .fontColor(textColor)
          }
        }
        .width('100%')
        .justifyContent(FlexAlign.SpaceBetween)
      }
      .padding({
        left: 35
      })
      .width('100%')
      .alignItems(HorizontalAlign.Start)
    }
    .width('100%')
    .alignItems(HorizontalAlign.Start)
  }
}

export default ListItemInfo