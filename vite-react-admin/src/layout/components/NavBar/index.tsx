import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import Breadcrumb from './components/Breadcrumb'
import Personal from './components/Personal'

const { Header } = Layout
const NavBar = ({ sideStatus, ChangeAsideStatus }) => {
  return (
    <Header style={{ padding: 0 }} className="header-box">
      {/* 侧边栏开关按钮 */}
      <div
        className="trigger"
        // onClick={() => ChangeAsideStatus(!sideStatus)}
        style={{ fontSize: '20px' }}
      >
        {sideStatus ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
      </div>
      {/* 面包屑 */}
      {/* <Breadcrumb></Breadcrumb> */}
      {/* 头像下拉框 */}
      {/* <Personal></Personal> */}
    </Header>
  )
}
export default NavBar
