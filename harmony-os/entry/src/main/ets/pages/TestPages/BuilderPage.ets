@Component
struct myCard {

  @BuilderParam headerBuilderParam : ()=> void = this.headerBuilder

  @BuilderParam contentBuilderParam: ()=> void = this.contentBuilder


  @Builder headerBuilder() {
    Text('这是默认的头部标题')
  }

  @Builder contentBuilder() {
    Column() {
      Text('这是内容')
    }
  }

  build(){
    Column(){
      // 头部标题
      Row(){
        this.headerBuilderParam()
      }
      .border({
        width: {bottom: 1},
        color: "#ccc"
      })
      .width('100%')
      .height(40)

      // 内容部分
      Column(){
        this.contentBuilderParam()
      }
    }
    .width('100%')
    .height(150)
    .padding(10)
    .margin({
      bottom: 10
    })
    .borderRadius(10)
    .backgroundColor(Color.White)

  }
}

@Entry
@Component
struct BuilderPage{

  @Builder myCardHeaderBuilder() {
    Text('这是传递给头部标题的样式')
      .fontSize(18)
      .fontWeight(700)
  }

  @Builder myCardContentBuilder() {
    Column(){
      Text('这是传递给内容区域的xxxxx')
        .width('100%')
    }.width('100%')
    .justifyContent(FlexAlign.Start)
  }


  build(){
    Column(){
      myCard({
        headerBuilderParam: this.myCardHeaderBuilder,
        contentBuilderParam: this.myCardContentBuilder
      })
    }.width('100%')
    .height('100%')
    .padding(10)
    .backgroundColor('#ccc')
  }
}