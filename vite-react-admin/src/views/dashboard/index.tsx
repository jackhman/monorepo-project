import "./index.scss"
import HomeCard from "./components/HomeCard"
import TodoList from "./components/TodoList"
import EchartsCard from "./components/EchartsCard"
import { Row, Col } from "antd"
const HomeDom = () => {
  function insertTodoList(v) {
    console.log(v)
  }
  return (
    <div>
      {/* 头部分块 */}
      <HomeCard />
      <div className="middle-box">
        <Row>
          <Col xl={12} sm={24}>
            {/* Echarts 组件 */}
            <EchartsCard></EchartsCard>
          </Col>
        </Row>
      </div>
      {/* todolist 组件 */}
      <TodoList insertTodoList={insertTodoList} />
    </div>
  )
}

export default HomeDom
