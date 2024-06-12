let msg: string = '组件外层的变量msg'

@Entry
@Component
struct StateVariable {
  msg1: string = '组件内部的变量msg1'
  @State msg2: string = '组件内部的状态变量 msg2'
  @State count: number = 1

  build() {
    Column() {
      Column() {
        Text(msg)
        Text(this.msg1)
        Text(this.msg2)
          .onClick(() => {
            this.msg2 = '修改了组件内部的状态变量msg2为 message2'
          })
      }

      Row() {
        Button('-')
          .onClick(() => {
            this.count--
          })
        Text(this.count.toString())
          .margin({
            left: 10,
            right: 10
          })
        Button('+')
          .onClick(() => {
            this.count++
          })
      }
    }
  }
}