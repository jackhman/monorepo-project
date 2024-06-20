// 使用 props 进行父子组件传值
@Component
struct SonCom {
  // 父子间传递过来的数据使用 @Prop 进行接受
  @Prop sonCar: string
  // 修改传递的参数
  changeInfo = (info: string)=> {}
  build() {
    Column() {
      Text(`这是子组件的盒子--- ${this.sonCar}`)

      Button('子组件修改父组件的数据').onClick((event: ClickEvent) => {
        this.changeInfo('吉利银河 L7 ----' + Math.ceil(Math.random() * 10))
      })
    }
    .width('100%')
    .height(100)
    .backgroundColor(Color.Orange)
  }
}


@Entry
@Component
struct PropsPage {
  @State info: string = '比亚迪 宋'

  changeInfo = (newInfo: string)=>{
    this.info = newInfo
  }

  build() {
    Column({space: 20}) {
      Text(`这是父组件的盒子 ${this.info}`)

      Button('修改父组件的数据').onClick((event: ClickEvent) => {
        this.info = '领克 08---' + Math.ceil(Math.random() * 10)
      })
      // 这是子组件
      SonCom({
        sonCar: this.info,
        changeInfo: this.changeInfo
      })
    }
    .width('100%')
    .height(300)
    .backgroundColor(Color.Pink)
  }
}