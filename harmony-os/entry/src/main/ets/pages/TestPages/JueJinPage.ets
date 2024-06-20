import HeaderInfo from "../../components/JueJin/HeaderInfo"
import ListItemInfo from "../../components/JueJin/ListItemInfo"
import BottomComment from "../../components/JueJin/BottomComment"
import { handleCreateList, CommentItem } from "../../assets/model/JueJinList"

@Entry
@Component
struct JueJinPage {

  @State commitList: CommentItem[] = handleCreateList()


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
      BottomComment()
        .width('100%')
    }
    .width('100%')
    .height('100%')
  }
}