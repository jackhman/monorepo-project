import HeaderInfo from "../../components/JueJin/HeaderInfo"
import ListItemInfo from "../../components/JueJin/ListItemInfo"

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
      Column() {

      }
      .width('100%')
      .height(60)
      .backgroundColor(Color.Pink)
    }
    .width('100%')
    .height('100%')
  }
}