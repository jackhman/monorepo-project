@Observed
export class CommentItem {
  avatar: string
  name: string
  level: string
  comment: string
  likeNum: number
  isLike: boolean
  timeStamp: number
  time: string

  constructor(avatar: string,
              name: string,
              level: number,
              comment: string,
              likeNum: number,
              isLike: boolean,
              timeStamp: number) {
    this.avatar = avatar
    this.name = name
    this.comment = comment
    this.likeNum = likeNum
    this.isLike = isLike
    this.timeStamp = timeStamp

    this.level = this.handleLevel(level)
    this.time = this.handleTimeStamp(timeStamp)
  }

  handleLevel(level: number): string {
    return `/assets/images/JueJin/level_${level}.png`
  }

  handleTimeStamp(timeStamp: number):string {
    const currentTimeStamp = +new Date()
    const timeDIff = (currentTimeStamp - timeStamp) / 1000 // 转换为 秒
    let txt = ''
    if(timeDIff<0 || timeDIff === 0) {
      txt = '刚刚'
    } else if(timeDIff < 60) {
      txt = `${Math.floor(timeDIff)}秒前`
    } else if(timeDIff < 3600) {
      txt = `${Math.floor(timeDIff / 60)}分钟前`
    } else if(timeDIff < 86400) {
      txt = `${Math.floor(timeDIff / 3600)}小时前`
    } else if(timeDIff < 604800) {
      txt = `${Math.floor(timeDIff / 86400)}天前`
    } else if(timeDIff < 2592000) {
      txt = `${Math.floor(timeDIff / 604800)}周前`
    } else if(timeDIff < 31536000)  {
      txt = `${Math.floor(timeDIff / 2592000)}个月前`
    } else {
      txt = `${Math.floor(timeDIff / 31536000)}年前`
    }

    return txt
  }
}

export function handleCreateList() {
  return [
    new CommentItem("https://fastly.jsdelivr.net/npm/lz-npm-assets/images/gkd.gif", `小火车况且况且-${Math.ceil(Math.random() * 10)}`,Math.ceil(Math.random() * 6),'这是一个评论', Math.ceil(Math.random() * 100), false, +new Date('2023-01-02')),
    new CommentItem("https://fastly.jsdelivr.net/npm/lz-npm-assets/images/400x400.jpg", `小火车况且况且-${Math.ceil(Math.random() * 10)}`,Math.ceil(Math.random() * 6),'这是一个评论', Math.ceil(Math.random() * 100), false, +new Date('2022-01-02')),
    new CommentItem("https://fastly.jsdelivr.net/npm/lz-npm-assets/images/funny-round.png", `小火车况且况且-${Math.ceil(Math.random() * 10)}`,Math.ceil(Math.random() * 6),'这是一个评论', Math.ceil(Math.random() * 100), false, +new Date('2024-01-02')),
    new CommentItem("https://fastly.jsdelivr.net/npm/lz-npm-assets/images/ikun.jpeg", `小火车况且况且-${Math.ceil(Math.random() * 10)}`,Math.ceil(Math.random() * 6),'这是一个评论', Math.ceil(Math.random() * 100), false, +new Date('2024-06-02')),
    new CommentItem("https://fastly.jsdelivr.net/npm/lz-npm-assets/images/jiaban.jpg", `小火车况且况且-${Math.ceil(Math.random() * 10)}`,Math.ceil(Math.random() * 6),'这是一个评论', Math.ceil(Math.random() * 100), false, +new Date('2024-06-12')),
    new CommentItem("https://fastly.jsdelivr.net/npm/lz-npm-assets/images/default-avatar.jpg", `小火车况且况且-${Math.ceil(Math.random() * 10)}`,Math.ceil(Math.random() * 6),'这是一个评论', Math.ceil(Math.random() * 100), false, +new Date('2023-04-02')),
  ]
}