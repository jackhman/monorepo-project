import HeaderInfo from "../../components/JueJin/HeaderInfo"
import ListItemInfo from "../../components/JueJin/ListItemInfo"
import BottomComment from "../../components/JueJin/BottomComment"
import { handleCreateList, CommentItem } from "../../assets/model/JueJinList"

@Entry
@Component
struct JueJinPage {

  @State commitList: CommentItem[] = handleCreateList()


  // 处理提交
  handleSubmit = (value: string) => {
    const newItem = new CommentItem('https://fastly.jsdelivr.net/npm/lz-npm-assets/images/ikun.jpeg', `小火车况且况且-${Math.ceil(Math.random() * 10)}`,Math.ceil(Math.random() * 6),value, Math.ceil(Math.random() * 100), false, +new Date())
    this.commitList = [newItem, ...this.commitList]
  }


  build() {
    Column() {
      // 头部
      HeaderInfo()
      // 中间内容
      Column() {
        List({space: 10}) {
          ForEach(this.commitList, (item: CommentItem, index: number) => {
            ListItem() {
              ListItemInfo({
                listItem: item
              })
            }
          })

        }
      }
      .layoutWeight(1)
      .padding(16)
      // 底部评论区
      BottomComment({
        handleSubmit: (value: string)=> {
          this.handleSubmit(value)
        }
      })
        .width('100%')
    }
    .width('100%')
    .height('100%')
  }
}