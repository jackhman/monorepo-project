import HeaderInfo from "../../components/JueJin/HeaderInfo"
import ListItemInfo from "../../components/JueJin/ListItemInfo"
import BottomComment from "../../components/JueJin/BottomComment"
import { handleCreateList, CommentItem } from "../../assets/model/JueJinList"

const list: CommentItem[] = handleCreateList()
console.log(JSON.stringify(list))
@Entry
@Component
struct JueJinPage {



  build() {
    Column() {
      // 头部
      HeaderInfo()
      // 中间内容
      Column() {
        List() {
          ForEach(Array.from({ length: 20 }), () => {
            ListItem() {
              ListItemInfo()
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