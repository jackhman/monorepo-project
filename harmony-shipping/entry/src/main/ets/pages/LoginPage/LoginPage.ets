import router from '@ohos.router'

@Extend(TextInput)
function textInputExtend() {
  .height(50)
  .borderRadius(50)
}

@Extend(Image)
function loginTypeExtend() {
  .width(30)
}

const usernameErrorText: string = '请输入用户名'
const passwordErrorText: string = '请输入密码'

enum TypeEnum {
  password = 'password',
  username = 'username'
}

@Entry
@Component
struct LoginPage {
  @State username: string = ''
  @State usernameErrorText: string = ''
  @State password: string = ''
  @State passwordErrorText: string = ''

  // 用来处理提交
  handleSubmit() {
    if (this.password && this.username) {

      AlertDialog.show({
        message: `用户名和密码是 ${this.username} ${this.password}`,
        confirm: {
          value: '确定',
          action: () => {
            router.replaceUrl({
              url:"pages/HomePage/HomePage"
            })
          }
        },
      })
    } else {
      if (!this.username) {
        this.usernameErrorText = usernameErrorText
      }
      if (!this.password) {
        this.passwordErrorText = passwordErrorText
      }
      return
    }
  }

  // 用来处理编辑器改变事件
  handleEditChange(isEditing: boolean, thisVariable: string, errorText: string, type: TypeEnum) {

    // 说明没有输入了，需要校验是否为空
    if (isEditing === false) {
      if (!thisVariable) {
        if (type === TypeEnum.password) {
          this.passwordErrorText = errorText
        } else if (type === TypeEnum.username) {
          this.usernameErrorText = errorText
        }
      }
      // 说明现在是有数据的，需要重置错误的高亮
      else {
        if (type === TypeEnum.password) {
          this.passwordErrorText = ''
        } else if (type === TypeEnum.username) {
          this.usernameErrorText = ''
        }
      }
    } else {
      if (thisVariable) {
        if (type === TypeEnum.password) {
          this.passwordErrorText = ''
        } else if (type === TypeEnum.username) {
          this.usernameErrorText = ''
        }
      }
    }
  }

  build() {
    Column() {
      Column() {
        Image($r("app.media.app_logo"))
          .width(60)
          .margin({
            bottom: 20
          })
        Text('欢迎登录')
          .fontSize(24)
          .fontWeight(700)
          .fontColor('#333')
      }

      Column({ space: 10 }) {
        TextInput({ placeholder: usernameErrorText, text: $$this.username })
          .textInputExtend()
          .border({
            width: 1,
            color: this.usernameErrorText ? '#99FA2A2D' : Color.Transparent
          })
          .type(InputType.Normal)
          .showError(this.usernameErrorText)
          .onChange(() => {
            if (this.username) {
              this.usernameErrorText = ''
            }
          })
          .onEditChange((isEditing: boolean) => {
            this.handleEditChange(isEditing, this.username, usernameErrorText, TypeEnum.username)
          })

        TextInput({ placeholder: passwordErrorText, text: $$this.password })
          .textInputExtend()
          .type(InputType.Password)
          .showError(this.passwordErrorText)
          .onChange(() => {
            if (this.password) {
              this.passwordErrorText = ''
            }
          })
          .onSubmit(() => {
            if (!this.password) {
              this.passwordErrorText = passwordErrorText
            } else {
              this.passwordErrorText = ''
            }
          })
          .onEditChange((isEditing: boolean) => {
            this.handleEditChange(isEditing, this.password, passwordErrorText, TypeEnum.password)
          })

        Row() {
          Text('短信验证码登录')
            .fontColor(Color.Blue)
          Text('忘记密码')
            .fontColor(Color.Red)
        }
        .width('100%')
        .margin({
          bottom: 10,
          top: 10
        })
        .justifyContent(FlexAlign.SpaceBetween)

        Button("登录")
          .width('100%')
          .onClick(() => {
            this.handleSubmit()
          })

        Text('其他登录方式')
          .margin({
            bottom: 10,
            top: 10
          })

        Row({ space: 60 }) {
          Image($r('app.media.wechat'))
            .loginTypeExtend()
          Image($r('app.media.huawei'))
            .loginTypeExtend()
          Image($r('app.media.qq'))
            .loginTypeExtend()
        }
      }
      .padding(16)

    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}