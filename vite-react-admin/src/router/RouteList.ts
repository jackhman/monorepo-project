import {
  HomeOutlined,
  FileTextOutlined,
  FileAddOutlined,
  BarsOutlined,
  GroupOutlined,
  UserSwitchOutlined,
  BgColorsOutlined,
  DatabaseOutlined,
  DiffOutlined
} from "@ant-design/icons"

import { IRouterList } from "@/ts/interface/router"
import { ROUTE_PATH, ROUTE_TITLE } from "./RouteConst"
import Dashboard from "@/views/dashboard/index"
import Personal from "@/views/personal"
import Document from "@/views/document"
import ArticleCategory from "@/views/article/category"
import ArticleList from "@/views/article/list"
import ArticleDetails from "@/views/article/details"
import ArticleCreate from "@/views/article/create"
import FirstMenu from "@/views/multilevel-menu/first-menu"
import SecondMenu from "@/views/multilevel-menu/second-menu"
import ThirdMenu from "@/views/multilevel-menu/third-menu"
import AdminManagement from "@/views/admin"
import ColorList from "@/views/colorList"

/** 路由的保存数组*/
export const routerList: Array<IRouterList> = [
  {
    path: ROUTE_PATH.DASHBOARD,
    meta: { icon: HomeOutlined, title: ROUTE_TITLE.DASHBOARD },
    Component: Dashboard
  },
  // 个人中心页面
  {
    path: ROUTE_PATH.PERSONAL,
    meta: { hidden: true, title: ROUTE_TITLE.PERSONAL },
    Component: Personal
  },
  // 文档页面
  {
    path: ROUTE_PATH.DOCUMENT,
    meta: { icon: FileTextOutlined, title: ROUTE_TITLE.DOCUMENT },
    Component: Document
  },
  // 权限页面
  {
    path: ROUTE_PATH.ADMIN_MANAGEMENT,
    meta: { icon: UserSwitchOutlined, title: ROUTE_TITLE.ADMIN_MANAGEMENT },
    Component: AdminManagement
  },
  // 颜色表大全
  {
    path: ROUTE_PATH.COLOR_LIST,
    meta: { icon: BgColorsOutlined, title: ROUTE_TITLE.COLOR_LIST },
    Component: ColorList
  },
  // 文章
  {
    path: ROUTE_PATH.ARTICLE,
    redirect: ROUTE_PATH.ARTICLE_LIST,
    meta: { icon: DatabaseOutlined, exact: true, title: ROUTE_TITLE.ARTICLE },
    children: [
      {
        path: ROUTE_PATH.ARTICLE_CATEGORY,
        meta: { icon: DiffOutlined, title: ROUTE_TITLE.ARTICLE_CATEGORY },
        Component: ArticleCategory
      },
      {
        path: ROUTE_PATH.ARTICLE_LIST,
        meta: { icon: DiffOutlined, title: ROUTE_TITLE.ARTICLE_LIST },
        Component: ArticleList
      },
      {
        path: ROUTE_PATH.ARTICLE_CREATE,
        meta: { icon: FileAddOutlined, title: ROUTE_TITLE.ARTICLE_CREATE },
        Component: ArticleCreate
      },
      {
        path: ROUTE_PATH.ARTICLE_EDIT,
        meta: { hidden: true, title: ROUTE_TITLE.ARTICLE_EDIT },
        Component: ArticleCreate
      },
      {
        path: ROUTE_PATH.ARTICLE_DETAILS,
        meta: { hidden: true, title: ROUTE_TITLE.ARTICLE_DETAILS },
        Component: ArticleDetails
      }
    ]
  },
  // 多级菜单
  {
    path: ROUTE_PATH.MULTILEVEL,
    redirect: ROUTE_PATH.MULTILEVEL_FIRST,
    meta: { icon: GroupOutlined, exact: true, title: ROUTE_TITLE.MULTILEVEL },
    children: [
      {
        path: ROUTE_PATH.MULTILEVEL_FIRST,
        meta: { icon: BarsOutlined, title: ROUTE_TITLE.MULTILEVEL_FIRST },
        Component: FirstMenu
      },
      {
        path: ROUTE_PATH.MULTILEVEL_SECOND,
        redirect: ROUTE_PATH.MULTILEVEL_THIRD,
        meta: {
          icon: BarsOutlined,
          title: ROUTE_TITLE.MULTILEVEL_SECOND
        },
        children: [
          {
            path: ROUTE_PATH.MULTILEVEL_THIRD,
            meta: {
              icon: BarsOutlined,
              title: ROUTE_TITLE.MULTILEVEL_THIRD
            },
            Component: SecondMenu
          },
          {
            path: ROUTE_PATH.MULTILEVEL_THIRD_TWO,
            redirect: ROUTE_PATH.MULTILEVEL_FOUR,
            meta: {
              icon: FileAddOutlined,
              title: ROUTE_TITLE.MULTILEVEL_THIRD_TWO,
              breadcrumbShowFlag: false
            },
            children: [
              {
                path: ROUTE_PATH.MULTILEVEL_FOUR,
                meta: {
                  icon: FileAddOutlined,
                  title: ROUTE_TITLE.MULTILEVEL_FOUR
                },
                Component: ThirdMenu
              }
            ]
          }
        ]
      }
    ]
  }
]
