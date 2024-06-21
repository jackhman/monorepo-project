// 这是模拟的数据
@Observed
class ListItemClass {
  name: string
  likeNum: number
  isLike: boolean
  comment: string

  constructor(name: string, likeNum: number, isLike: number, comment: string) {
    this.name = name
    this.likeNum = likeNum
    this.isLike = isLike === 0 ? false : true
    this.comment = comment
  }
}

function createData() {
  return [
    new ListItemClass(`小火车况且况且-${Math.ceil(Math.random() * 10)}`, Math.ceil(Math.random() * 100), Math.floor(Math.random() * 2), `这是随机的评论--${Math.ceil(Math.random() * 1000)}`),
    new ListItemClass(`小火车况且况且-${Math.ceil(Math.random() * 10)}`, Math.ceil(Math.random() * 100), Math.floor(Math.random() * 2), `这是随机的评论--${Math.ceil(Math.random() * 1000)}`),
    new ListItemClass(`小火车况且况且-${Math.ceil(Math.random() * 10)}`, Math.ceil(Math.random() * 100), Math.floor(Math.random() * 2), `这是随机的评论--${Math.ceil(Math.random() * 1000)}`),
    new ListItemClass(`小火车况且况且-${Math.ceil(Math.random() * 10)}`, Math.ceil(Math.random() * 100), Math.floor(Math.random() * 2), `这是随机的评论--${Math.ceil(Math.random() * 1000)}`)
  ]
}


// 子组件
@Component
struct ChildCom {
  @ObjectLink listInfo: ListItemClass

  build() {

    Column() {
      Text(this.listInfo.name)
        .fontSize(18)
        .fontWeight(700)
        .fontColor('#333')
        .margin({
          bottom: 10
        })

      Row() {
        Text(this.listInfo.comment)

        Row() {
          Text(this.listInfo.likeNum.toString())
            .fontColor(this.listInfo.isLike ? Color.Red : '#333')
        }
        .onClick(() => {

          if (this.listInfo.isLike) {
            this.listInfo.likeNum -= 1
          } else {
            this.listInfo.likeNum += 1
          }
          this.listInfo.isLike = !this.listInfo.isLike
        })
      }
      .justifyContent(FlexAlign.SpaceBetween)
      .width('100%')
    }
    .padding(10)
    .borderRadius(10)
    .alignItems(HorizontalAlign.Start)
    .width('100%')
    .backgroundColor(Color.White)
  }
}


// 父组件
@Entry
@Component
struct ObservedObjectLink {
  @State list: ListItemClass[] = createData()

  build() {
    Column() {
      List({
        space: 10
      }) {
        ForEach(this.list, (item: ListItemClass, index: number) => {
          ListItem() {
            ChildCom({
              listInfo: item
            })
          }
        })
      }
    }
    .padding(10)
    .width('100%')
    .height('100%')
    .backgroundColor(Color.Gray)
  }
}