@Extend(Text) function handleTextStyle(flag: boolean) {
  .fontSize(14)
  .fontColor(flag? '#333': "#aaa")
  .padding({
    left: 12,
    right: 12,
    top: 6,
    bottom: 6
  })
  .backgroundColor(flag ? Color.White : '#f7f8fa')
  .border({
    width: 1,
    color: flag ? '#aaa' : '#f7f8fa',
    radius: 50
  })
}


@Component
struct HeaderInfo {
  @State focusOn: boolean = true

  build() {
    Row() {
      Text('全部评论')
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .fontColor('#333')

      Row() {
        Text('最新')
          .handleTextStyle(this.focusOn)
          .onClick(() => this.focusOn = true)
        Text('最热')
          .handleTextStyle(!this.focusOn)
          .onClick(() => this.focusOn = false)
      }
      .backgroundColor('#f7f8fa')
      .border({
        width: 1,
        color: '#f7f8fa',
        radius: 50
      })

    }
    .width('100%')
    .padding(16)
    .justifyContent(FlexAlign.SpaceBetween)
  }
}

export default HeaderInfo