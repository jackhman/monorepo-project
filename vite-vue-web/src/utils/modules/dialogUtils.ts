import { computed, ref, Ref, watch } from "vue"
import { ROUTE_PATH } from "@/router/RouteConst"
import { useAppStore } from "@/store/app"
interface IHandleVisible {
  /** 绑定给每个弹出框的变量 */
  visible: Ref<boolean>
  /** 弹出框 开启的事件 */
  handleDialogOpen: () => void
  /** 弹出框 关闭的事件 */
  handleDialogClose: () => void
}
/** 统一处理弹出框的绑定变量 */
export const handleVisible = (): IHandleVisible => {
  const store = useAppStore()

  // visible就是绑定给每个弹出框的变量
  const visible = ref<boolean>(false)

  const popstateFlag = computed(() => store.popstateFlag)

  // 并且通过监听物理返回按钮的触发,关闭弹出框
  watch(
    () => popstateFlag.value,
    val => {
      if (val && visible.value) {
        visible.value = false
      }
    }
  )

  /** 弹出框 开启的事件 */
  const handleDialogOpen = () => {
    store.changeDialogFlag(true)
    visible.value = true
  }

  /** 弹出框 关闭的事件 */
  const handleDialogClose = () => {
    store.changeDialogFlag(false)
    visible.value = false
  }

  return {
    visible,
    handleDialogOpen,
    handleDialogClose
  }
}

/** 判断当前弹出框的标识符是否存在
 * @return {true} 表示存在
 * @return {false} 表示不存在
 */
export const checkDialogFlagTag = (currentUrl?: string): boolean => {
  const store = useAppStore()
  let dialogFlag = store.dialogFlag
  // 登录页面不需要校验
  if (currentUrl === ROUTE_PATH.LOGIN) dialogFlag = false
  return dialogFlag
}
