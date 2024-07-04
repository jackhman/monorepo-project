@Entry
@Component
export struct HomePage {
  @State message: string = '首页'

  build() {
    Row() {
      Scroll() {
        Column(){
          ForEach(Array.from({ length: 100 }), (item:number, i: number) => {
            Text(this.message + i)
              .fontSize(50)
              .fontWeight(FontWeight.Bold)
          })
        }
      }
      .width('100%')
    }
    .height('100%')
  }
}