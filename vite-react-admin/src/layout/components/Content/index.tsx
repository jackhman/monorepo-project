import { Layout } from 'antd'
import { Outlet } from "react-router-dom"
const { Content } = Layout
const ContentDom = () => {
  return (
    <Content className="content-box">
      <Outlet></Outlet>
    </Content>
  )
}
export default ContentDom
