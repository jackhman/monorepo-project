import React from 'react'
import { Menu, Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import { DownOutlined, UserOutlined, ExportOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { IUserBaseInfo } from '@/typescript/shared/interface/user'
import { clearLoginData } from '@/utils'
import { ROUTE_PATH } from '@/router/RouteConst'

interface IProps {
  userInfo: IUserBaseInfo
}

/** 右上角的个人 */
const Personal = ({ userInfo }: IProps) => {
  const navigate = useNavigate()
  // 点击 菜单项
  const menuClick: MenuProps['onClick'] = e => {
    const { key } = e
    switch (key) {
    // 个人中心
    case 'personal':
      navigate('/personal', {
        state: { test: 'dashboard' }
      })
      break
    // 退出登录
    case 'logout':
      clearLoginData()
      navigate(ROUTE_PATH.LOGIN)
      break
    default:
      break
    }
  }
  const menu = (
    <Menu onClick={menuClick}>
      <Menu.Item key="personal">
        <UserOutlined />
        <span>个人中心</span>
      </Menu.Item>
      {/* <Menu.Item key="1">
        <span>修改密码</span>
      </Menu.Item> */}
      <Menu.Divider />
      <Menu.Item key="logout">
        <ExportOutlined />
        <span>退出登录</span>
      </Menu.Item>
    </Menu>
  )
  return (
    <div className="personal-box">
      <Dropdown overlay={menu} trigger={['hover']}>
        <div className="personal-dropdown">
          <span className="personal-name">Hi~ {userInfo.nickName}</span>
          <img className="personal-img" src={userInfo.avatar} alt="" />
          <DownOutlined />
        </div>
      </Dropdown>
    </div>
  )
}

export default Personal
