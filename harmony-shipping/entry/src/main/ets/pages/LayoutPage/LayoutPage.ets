import { tabBarList, TabBarItem } from '../../modules/Layout'
import { HomePage } from '../HomePage/HomePage'

@Entry
@Component
struct LayoutPage {
  @State currentIndex: number = 0
  private tabsController: TabsController = new TabsController()

  @Builder
  tabBuilder(tabItem: TabBarItem) {
    Column() {
      Image(this.currentIndex === tabItem.index ? tabItem.selectedIcon : tabItem.unSelectIcon)
        .width(28)
        .aspectRatio(1)
        .margin({
          bottom: 5
        })
      Text(tabItem.name)
        .fontColor(this.currentIndex === tabItem.index ? $r('app.color.base_color') : '#333')
        .fontSize(this.currentIndex === tabItem.index ? 14 : 12)
        .fontWeight(this.currentIndex === tabItem.index ? 700 : 400)
    }.width('100%')
  }

  build() {
    Column() {
      Tabs({
        barPosition: BarPosition.End,
        index: this.currentIndex,
        controller: this.tabsController
      }) {

        TabContent() {
          HomePage()
        }.tabBar(this.tabBuilder(tabBarList[0]))

        TabContent() {
          HomePage()
        }.tabBar(this.tabBuilder(tabBarList[1]))

        TabContent() {
          HomePage()
        }.tabBar(this.tabBuilder(tabBarList[2]))

        TabContent() {
          HomePage()
        }.tabBar(this.tabBuilder(tabBarList[3]))

        TabContent() {
          HomePage()
        }.tabBar(this.tabBuilder(tabBarList[4]))
      }
      .onChange((index: number) => {
        this.currentIndex = index
      })
      .scrollable(false)
      .animationDuration(0)
      .width('100%')
      .height('100%')
      .backgroundColor('#F1F3F5')
    }
    .width('100%')
    .height('100%')
  }
}