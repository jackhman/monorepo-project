export class TabBarItem {
  name: string = ''
  index: number = 0
  // 未选中
  unSelectIcon: ResourceStr = ''
  // 选中
  selectedIcon: ResourceStr = ''
}

export const tabBarList: TabBarItem[] = [
  {
    name: '首页',
    index: 0,
    unSelectIcon: '/assets/images/tabBar/unselect_home.svg',
    selectedIcon: '/assets/images/tabBar/selected_home.svg'
  },
  {
    name: '优选',
    index: 1,
    unSelectIcon: '/assets/images/tabBar/unselect_yx.svg',
    selectedIcon: '/assets/images/tabBar/selected_yx.svg'
  },
  {
    name: '视频',
    index: 2,
    unSelectIcon: '/assets/images/tabBar/unselect_video.svg',
    selectedIcon: '/assets/images/tabBar/selected_video.svg'
  },
  {
    name: '消息',
    index: 3,
    unSelectIcon: '/assets/images/tabBar/unselect_message.svg',
    selectedIcon: '/assets/images/tabBar/selected_message.svg'
  }, {
  name: '我的',
  index: 4,
  unSelectIcon: '/assets/images/tabBar/unselect_wd.svg',
  selectedIcon: '/assets/images/tabBar/selected_wd.svg'
}
]