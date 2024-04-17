import "./index.scss"
import HomeCard from "./components/HomeCard"
import TodoList from "./components/TodoList"
import EchartsCard from "./components/EchartsCard"
import { Row, Col } from "antd"
const HomeDom = () => {
  return (
    <div>
      {/* 头部分块 */}
      <HomeCard />
      <div className="middle-box">
        <Row gutter={10}>
          <Col xl={12} sm={24}>
            {/* Echarts 组件 */}
            <EchartsCard></EchartsCard>
          </Col>
          <Col xl={6} sm={24}>
            {/* todolist 组件 */}
            <TodoList/>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default HomeDom
