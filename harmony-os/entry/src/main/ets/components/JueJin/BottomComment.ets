@Extend(Image) function handleImg() {
  .width(20)
}

@Component
struct BottomComment {
  @State inputTxt: string = ''
  handleSubmit = (inputTxt: string) => {
  }

  build() {
    Row() {
      Row() {
        Image('/assets/images/JueJin/编辑.svg')
          .handleImg()
          .margin({
            left: 10
          })
        TextInput({
          placeholder: '评论一些什么...',
          text: this.inputTxt
        })
          .backgroundColor(Color.Transparent)
          .onChange((value: string) => {
            this.inputTxt = value
          })
          .onSubmit(() => {
            if (this.inputTxt) {
              this.handleSubmit(this.inputTxt)
              this.inputTxt = ""
            }

          })

      }
      .margin({
        left: 20
      })
      .backgroundColor('#f5f4f5')
      .borderRadius(50)
      .layoutWeight(1)

      Image('/assets/images/JueJin/赞.svg')
        .handleImg()
        .margin({
          left: 20,
          right: 10
        })

      Image('/assets/images/JueJin/_收藏.svg')
        .handleImg()

    }
    .margin({
      bottom: 20
    })
  }
}

export default BottomComment