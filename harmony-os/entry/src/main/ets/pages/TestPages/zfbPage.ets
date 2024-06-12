@Entry
@Component
struct ZFBPages {
  build() {
    Column() {

      Stack({ alignContent: Alignment.Bottom }) {

        // 上面的内容部分
        Stack({ alignContent: Alignment.Top }) {
          // 搜索部分
          Row() {
            Column() {
              Text('北京')
                .fontSize(16)
                .fontColor('#fff')
              Text('晴 2℃')
                .fontSize(12)
                .fontColor('#fff')
              Image($r('app.media.ic_arrow_down_0'))
                .width(14)
                .fillColor("#fff")
                .position({
                  x: 35,
                  y: 0
                })
            }

            // 中间部分
            Row() {
              Image($r('app.media.zfb_head_search'))
                .width(20)
                .fillColor('#ccc')
                .margin({
                  right: 5
                })

              Text('北京交通一卡通')
                .fontColor('#ccc')
                .fontSize(14)
                .layoutWeight(1)

              Text('搜索')
                .fontSize(14)
                .fontColor('#5675e9')
                .textAlign(TextAlign.Center)
                .fontWeight(700)
                .border({
                  width: { left: 1 },
                  color: "#ccc"
                })
                .padding({
                  left: 10
                })
            }
            .layoutWeight(1)
            .height(30)
            .borderRadius(6)
            .backgroundColor("#fff")
            .padding({
              left: 10,
              right: 10
            })
            .margin({
              left: 20,
              right: 10
            })

            // 添加按钮
            Image($r('app.media.zfb_head_plus'))
              .width(20)
              .fillColor('#fff')
          }
          .padding({
            left: 10,
            right: 10
          })
          .width('100%')
          .height(60)
          .backgroundColor('#5b73e1')
          .zIndex(999)

          // 页面主体部分
          Scroll() {
            Column() {
              // 卡片部分
              Row() {
                Column() {
                  Image($r('app.media.zfb_top_scan'))
                    .fillColor('#fff')
                    .width(40)
                    .margin({
                      bottom: 2
                    })
                  Text('扫一扫')
                    .fontSize(16)
                    .fontColor('#fff')
                }
                .layoutWeight(1)

                Column() {
                  Image($r('app.media.zfb_top_pay'))
                    .fillColor('#fff')
                    .width(40)
                    .margin({
                      bottom: 2
                    })
                  Text('收付款')
                    .fontSize(16)
                    .fontColor('#fff')
                }
                .layoutWeight(1)

                Column() {
                  Image($r('app.media.zfb_top_travel'))
                    .fillColor('#fff')
                    .width(40)
                    .margin({
                      bottom: 2
                    })
                  Text('出行')
                    .fontSize(16)
                    .fontColor('#fff')
                }
                .layoutWeight(1)

                Column() {
                  Image($r('app.media.zfb_top_card'))
                    .fillColor('#fff')
                    .width(40)
                    .margin({
                      bottom: 2
                    })
                  Text('卡包')
                    .fontSize(16)
                    .fontColor('#fff')
                }
                .layoutWeight(1)
              }
              .backgroundColor('#5b73e1')
              .padding({
                top: 10,
                bottom: 20
              })

              Column() {

                // 小卡片
                Column({ space: 10 }) {
                  Row() {
                    Column() {
                      Image($r('app.media.zfb_nav1'))
                        .width(30)
                        .margin({
                          bottom: 2
                        })
                      Text("滴滴出行")
                        .fontColor('#333')
                        .fontSize(12)
                    }
                    .layoutWeight(1)

                    Column() {
                      Image($r('app.media.zfb_nav2'))
                        .width(30)
                        .margin({
                          bottom: 2
                        })
                      Text("生活缴费")
                        .fontColor('#333')
                        .fontSize(12)
                    }
                    .layoutWeight(1)

                    Column() {
                      Image($r('app.media.zfb_nav3'))
                        .width(30)
                        .margin({
                          bottom: 2
                        })
                      Text("股票")
                        .fontColor('#333')
                        .fontSize(12)
                    }
                    .layoutWeight(1)

                    Column() {
                      Image($r('app.media.zfb_nav4'))
                        .width(30)
                        .margin({
                          bottom: 2
                        })
                      Text("蚂蚁森林")
                        .fontColor('#333')
                        .fontSize(12)
                    }
                    .layoutWeight(1)

                    Column() {
                      Image($r('app.media.zfb_nav5'))
                        .width(30)
                        .margin({
                          bottom: 2
                        })
                      Text("手机充值")
                        .fontColor('#333')
                        .fontSize(12)
                    }
                    .layoutWeight(1)
                  }

                  Row() {
                    Column() {
                      Image($r('app.media.zfb_nav6'))
                        .width(30)
                        .margin({
                          bottom: 2
                        })
                      Text("余额宝")
                        .fontColor('#333')
                        .fontSize(12)
                    }
                    .layoutWeight(1)

                    Column() {
                      Image($r('app.media.zfb_nav7'))
                        .width(30)
                        .margin({
                          bottom: 2
                        })
                      Text("花呗")
                        .fontColor('#333')
                        .fontSize(12)
                    }
                    .layoutWeight(1)

                    Column() {
                      Image($r('app.media.zfb_nav8'))
                        .width(30)
                        .margin({
                          bottom: 2
                        })
                      Text("飞猪旅行")
                        .fontColor('#333')
                        .fontSize(12)
                    }
                    .layoutWeight(1)

                    Column() {
                      Image($r('app.media.zfb_nav9'))
                        .width(30)
                        .margin({
                          bottom: 2
                        })
                      Text("淘票票")
                        .fontColor('#333')
                        .fontSize(12)
                    }
                    .layoutWeight(1)

                    Column() {
                      Image($r('app.media.zfb_nav10'))
                        .width(30)
                        .margin({
                          bottom: 2
                        })
                      Text("饿了么")
                        .fontColor('#333')
                        .fontSize(12)
                    }
                    .layoutWeight(1)
                  }

                  Row() {
                    Column() {
                      Image($r('app.media.zfb_nav11'))
                        .width(30)
                        .margin({
                          bottom: 2
                        })
                      Text("读书听书")
                        .fontColor('#333')
                        .fontSize(12)
                    }
                    .layoutWeight(1)

                    Column() {
                      Image($r('app.media.zfb_nav12'))
                        .width(30)
                        .margin({
                          bottom: 2
                        })
                      Text("基金")
                        .fontColor('#333')
                        .fontSize(12)
                    }
                    .layoutWeight(1)

                    Column() {
                      Image($r('app.media.zfb_nav13'))
                        .width(30)
                        .margin({
                          bottom: 2
                        })
                      Text("直播广场")
                        .fontColor('#333')
                        .fontSize(12)
                    }
                    .layoutWeight(1)

                    Column() {
                      Image($r('app.media.zfb_nav14'))
                        .width(30)
                        .margin({
                          bottom: 2
                        })
                      Text("医疗健康")
                        .fontColor('#333')
                        .fontSize(12)
                    }
                    .layoutWeight(1)

                    Column() {
                      Image($r('app.media.zfb_nav15_more'))
                        .width(30)
                        .margin({
                          bottom: 2
                        })
                      Text("更多")
                        .fontColor('#333')
                        .fontSize(12)
                    }
                    .layoutWeight(1)
                  }
                }
                .padding(10)

                // 资讯
                Row({ space: 5 }) {
                  Image($r('app.media.zfb_pro_pic1'))
                    .layoutWeight(1)
                  Image($r('app.media.zfb_pro_pic2'))
                    .layoutWeight(1)
                  Image($r('app.media.zfb_pro_pic3'))
                    .layoutWeight(1)
                }

                // 市民中心
                Row(){
                  Image($r('app.media.zfb_pro_list1'))
                    .width('100%')
                    .margin({
                      top: 5,
                      bottom: 5
                    })
                }

                // 消费圈
                Row(){
                  Image($r('app.media.zfb_pro_list2'))
                    .width('100%')
                }
              }
              .width('100%')
              .borderRadius({
                topLeft: 20,
                topRight: 20
              })
              .backgroundColor('#f5f5f5')
              .padding({
                left: 5,
                right: 5,
              })

            }
            .width('100%')

          }.margin({
            top: 60,
            bottom: 60
          })
        }

        // 底部
        Row() {
          Column() {
            Image($r('app.media.zfb_tab_home'))
              .width(24)
          }.layoutWeight(1)

          Column() {
            Image($r('app.media.zfb_tab_money'))
              .width(20)
              .margin({
                bottom: 5
              })
            Text('理财')
              .fontSize(12)
          }.layoutWeight(1)

          Column() {
            Image($r('app.media.zfb_tab_life'))
              .width(20)
              .margin({
                bottom: 5
              })
            Text('生活')
              .fontSize(12)
          }.layoutWeight(1)

          Column() {
            Image($r('app.media.zfb_tab_chat'))
              .width(20)
              .margin({
                bottom: 5
              })
            Text('消息')
              .fontSize(12)
          }.layoutWeight(1)

          Column() {
            Image($r('app.media.zfb_tab_me'))
              .width(20)
              .margin({
                bottom: 5
              })
            Text('我的')
              .fontSize(12)
          }.layoutWeight(1)
        }
        .width('100%')
        .height(60)
        .backgroundColor(Color.White)
      }
      .width("100%")
      .height('100%')
      .backgroundColor('#5b73e1')
    }
  }
}