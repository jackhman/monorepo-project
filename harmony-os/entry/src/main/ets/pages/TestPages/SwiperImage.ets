// 轮播图组件
@Extend(Text)
function textExtend(color:ResourceColor, txt:string){
  .fontSize(20)
  .fontWeight(700)
  .backgroundColor(color)
  .fontColor(Color.White)
  .onClick(()=>{
    AlertDialog.show({
      message: txt
    })
  })
}


@Entry
@Component
struct SwiperImage {
  build() {
    Column() {
      Swiper() {
        Text("测试轮播图1")
          .textExtend(Color.Blue, '弹出框1')
        Text("测试轮播图2")
          .textExtend(Color.Brown, '弹出框2')
        Text("测试轮播图3")
          .textExtend(Color.Green, '弹出框3')
      }
      .autoPlay(true)
      .loop(true)
      .width('100%')
      .height(200)
    }
    .width("100%")
    .height('100%')

  }
}