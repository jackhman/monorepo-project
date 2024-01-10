import { useEffect, useState } from 'react'
import { Radio, RadioChangeEvent } from 'antd'
import './index.scss'
import { EnumFieldToTransformText } from '@/utils'
import { UserRolesEnum, UserRolesTextEnum } from '@shared/enum/user-enum'

import IconList from '@/components/IconList'


import { userStore } from "@/store/user"
const AdminManagement = () => {
  const userInfo = userStore.userInfo
  return (
    <div className="admin-management-box">
      <IconList></IconList>
    </div>
  )
}

export default AdminManagement
