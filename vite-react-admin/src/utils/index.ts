import { removeToken, removeUserId } from "./modules/commonSave"

/** 当前的环境 */
export const BaseEnv = {
  /** 开发 */
  development: "development",
  /** 生产 */
  production: "production",
  /** 测试 */
  test: "test"
}

/** 判断是否是开发环境 */
export const isDev = (): boolean => !!import.meta.env.VITE_DEV


/** 退出登录之前, 清除保存的数据 */
export const clearLoginData = () => {
  removeToken()
  removeUserId()
}

/**
 * token 过期，用户需要重新登录，并且清除掉部分数据
 */
export const tokenExpired = () => {
  logoutClearUtils()
  // 获取当前的路由
  // const { value } = router
  // // 在登录页面,不需要跳转
  // if (value.name !== ROUTE_NAME.LOGIN) {
  //   router.push({
  //     name: ROUTE_NAME.LOGIN
  //   })
  // }
}

/** 退出登录--需要清除的数据 */
export const logoutClearUtils = (): void => {
  removeToken()
  removeUserId()
}


type keyType = string | number | undefined
/** ts中的枚举字段 转换为枚举中文字段 */
export function EnumFieldToTransformText<
  T extends Record<string, keyType>,
  S extends Record<string, keyType>
>(enumField: T, enumTransform: S, field: keyType) {
  if(!field) return
  let getFindKey = ''
  for (const key in enumField) {
    const element = enumField[key]
    if(element === field) {
      getFindKey = key
      break
    }
  }
  const getTextValue = enumTransform[getFindKey]
  if(getTextValue) return getTextValue
  else console.warn('错误,未匹配到')
}

