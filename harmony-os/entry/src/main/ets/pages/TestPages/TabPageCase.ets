@Entry
@Component
struct TabPageCase {
  @Builder TabBuilder(index: number, txt: string, tabUrl: string, tabSelectUrl: string) {
    Column() {
      Image(index === this.currentIndex ? tabSelectUrl : tabUrl)
        .width(30)
      Text(txt)
        .fontSize(16)
        .margin({
          top: 5
        })
        .fontColor(index === this.currentIndex ? Color.Red : Color.Black)
    }
  }

  @Builder middleBuilder() {
    Column(){
      Image('/assets/images/TabScrollText/1.jpg')
        .width(50)
        .borderRadius(50)
        .margin({
          bottom: 8
        })
    }
  }

  @State currentIndex: number = 0

  build() {
    Column() {

      Tabs({
        barPosition: BarPosition.End
      }) {
        TabContent() {
          Text('首页内容')
        }
        .tabBar(this.TabBuilder(0, '首页', '/assets/images/TabScrollText/ic_tabbar_icon_0.png', '/assets/images/TabScrollText/ic_tabbar_icon_0_selected.png'))

        TabContent() {
          Text('分类内容')
        }
        .tabBar(this.TabBuilder(1, '分类', '/assets/images/TabScrollText/ic_tabbar_icon_1.png', '/assets/images/TabScrollText/ic_tabbar_icon_1_selected.png'))


        TabContent() {
          Text('中间区域')
        }
        .tabBar(this.middleBuilder())

        TabContent() {
          Text('购物车内容')
        }
        .tabBar(this.TabBuilder(3, '购物车', '/assets/images/TabScrollText/ic_tabbar_icon_2.png', '/assets/images/TabScrollText/ic_tabbar_icon_2_selected.png'))

        TabContent() {
          Text('我的内容')
        }
        .tabBar(this.TabBuilder(4, '我的', '/assets/images/TabScrollText/ic_tabbar_icon_3.png', '/assets/images/TabScrollText/ic_tabbar_icon_3_selected.png'))

      }
      .onChange((index) => {
        this.currentIndex = index
      })
    }.width('100%')
    .height('100%')
    .backgroundColor('#eee')
  }
}