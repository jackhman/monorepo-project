import { CommentItem } from '../../assets/model/JueJinList'
const textColor: string = '#aaa'

@Component
struct ListItemInfo {

  @ObjectLink listItem: CommentItem

  build() {
    Column() {
      Row() {
        Image(this.listItem.avatar)
          .width(30)
          .borderRadius(50)
          .aspectRatio(1)

        Text(this.listItem.name)
          .fontSize(16)
          .fontColor(textColor)
          .margin({
            left: 6,
            right: 6
          })

        Image(this.listItem.level)
          .width(30)
      }
      .alignItems(VerticalAlign.Center)

      Column() {
        Text(this.listItem.comment)
          .textOverflow({
            overflow: TextOverflow.Ellipsis
          })
          .maxLines(2)
          .margin({
            top: 10,
            bottom: 10
          })
        Row() {
          Text(this.listItem.time)
            .fontColor(textColor)
          Row() {
            Image(this.listItem.isLike ? '/assets/images/JueJin/like_select.png' : '/assets/images/JueJin/like_unselect.png')
              .width(20)
              .margin({
                right: 3
              })
            Text(this.listItem.likeNum.toString())
              .fontColor(textColor)
          }
          .onClick(()=> {
            if(this.listItem.isLike) {
              this.listItem.likeNum -= 1
            } else if(!this.listItem.isLike) {
              this.listItem.likeNum += 1
            }

            this.listItem.isLike = !this.listItem.isLike
          })
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