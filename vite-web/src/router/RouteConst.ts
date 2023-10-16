/** 路由名称 */
export const ROUTE_NAME = {
  /** 登录 */
  LOGIN: "LoginPage",
  /** layout */
  LAYOUT: "LayoutPage",
  /** 首页 */
  HOME: "HomePage",
  /** 文章详情页 */
  ARTICLE_DETAILS: "ArticleDetailsPage",
  /** 购物车 */
  SHOPCAR: "ShopCarPage",
  /** 我的 */
  PERSONAL: "PersonalPage",
  /** 搜索 */
  SEARCH: "SearchPage"
}
/** 路由path */
export const ROUTE_PATH = {
  /** 登录 */
  LOGIN: "/login",
  /** layout */
  LAYOUT: "/",
  /** 首页 */
  HOME: "/home",
  /** 文章详情页 */
  ARTICLE_DETAILS: "/article-details",
  /** 购物车 */
  SHOPCAR: "shop-car",
  /** 我的 */
  PERSONAL: "personal",
  /** 搜索 */
  SEARCH: "/search"
}

/** 需要缓存的路由 */
export const KeepAliveRouteList = [
  ROUTE_NAME.HOME,
  ROUTE_NAME.SHOPCAR,
  ROUTE_NAME.PERSONAL
]

/** 需要记录页面滚动的距离的 路由name */
export const RouteRecordScroll = new Set([
  ROUTE_NAME.SHOPCAR,
  ROUTE_NAME.PERSONAL
])
