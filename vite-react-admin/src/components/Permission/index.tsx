import { useState, useLayoutEffect, ReactNode } from "react"
import { userStore } from "@/store/user"
import { UserRolesEnum } from "@shared/enum/user-enum"
import { observer } from "mobx-react-lite"
interface IProps {
  children: ReactNode
  /** 传入的用户权限id */
  roleId?: UserRolesEnum | Array<UserRolesEnum>
  /** 满足条件即可的权限 */
  permissionFlag?: boolean
}
const PermissionCom = observer(
  ({ children, roleId, permissionFlag }: IProps) => {
    const [show, setShow] = useState<boolean>(false)
    useLayoutEffect(() => {
      setShow(() => false)
      if (permissionFlag) {
        setShow(() => true)
        return
      }
      if (roleId instanceof Array) {
        const getFind = roleId.find(
          value => value === userStore.userInfo.roleId
        )
        if (getFind) {
          setShow(() => true)
        }
      } else if (typeof roleId === "number") {
        roleId === userStore.userInfo.roleId && setShow(() => true)
      }
    }, [userStore.userInfo.roleId, permissionFlag])
    return <>{show && children}</>
  }
)

/** 用来设置 权限的显示 */
export default PermissionCom
