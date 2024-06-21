import HeaderInfo from "../../components/JueJin/HeaderInfo"
import ListItemInfo from "../../components/JueJin/ListItemInfo"
import BottomComment from "../../components/JueJin/BottomComment"
import { handleCreateList, CommentItem } from "../../assets/model/JueJinList"

@Entry
@Component
struct JueJinPage {

  @State commitList: CommentItem[] = handleCreateList()

  aboutToAppear(){
    this.handleSort(0)
  }

  // 处理提交
  handleSubmit(value: string){
    const newItem = new CommentItem('https://fastly.jsdelivr.net/npm/lz-npm-assets/images/ikun.jpeg', `小火车况且况且-${Math.ceil(Math.random() * 10)}`,Math.ceil(Math.random() * 6),value, Math.ceil(Math.random() * 100), false, +new Date())
    this.commitList = [newItem, ...this.commitList]
  }

  // 处理排序
  handleSort(index: number) {
    // 根据时间排序
    if(index === 0) {
      this.commitList.sort((a, b) => b.timeStamp  - a.timeStamp)
    }
    // 根据点赞量排序
    else if(index === 1) {
      this.commitList.sort((a, b) => b.likeNum  - a.likeNum)
    }
  }

  build() {
    Column() {
      // 头部
      HeaderInfo({
        handleSort: (index: number)=> {
          this.handleSort(index)
        }
      })
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