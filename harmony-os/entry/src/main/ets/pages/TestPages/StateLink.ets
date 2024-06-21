// 子组件
@Component
struct ChildCom {
  @Link list: number[]

  build() {
    Column() {

      List({space: 10}) {
        ForEach(this.list, (item: number, index) => {
          ListItem() {
            Text(item.toString())
              .width('100%')
              .padding(10)
              .backgroundColor(Color.White)

          }
        })
      }
    }.onClick(() => {
      this.list.push(this.list.length + 1)
    })
  }
}


// 父组件
@Entry
@Component
struct StateLink {
  @State list: number[] = [1, 2, 3]

  build() {
    Column() {
      ChildCom({
        // 注意,这里调用时,使用$替换this,这是语法规定
        list: $list
      })
    }
    .width('100%')
    .height('100%')
    .backgroundColor(Color.Gray)
  }
}