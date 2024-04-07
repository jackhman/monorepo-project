import { Row, Col } from "antd"
import "./index.scss"
import HomeCard from "./components/HomeCard"
import TodoList from "./components/TodoList"
import EchartsCom from "@/components/EchartsCom"
const HomeDom = () => {
  function insertTodoList(v) {
    console.log(v)
  }
  return (
    <div>
      {/* 头部分块 */}
      <HomeCard />
      {/* Echarts 组件 */}
      <div className="echart-component">
        <Row className="echart-component-main" gutter={10}>
          <Col xs={{ span: 24 }} xl={{ span: 8 }} className="echart-item-col">
            <div className="echart-item-div">
              <EchartsCom
                options={{
                  xAxis: {
                    type: "category",
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                  },
                  yAxis: {
                    type: "value"
                  },
                  series: [
                    {
                      data: [820, 932, 901, 934, 1290, 1330, 1320],
                      type: "line",
                      smooth: true
                    }
                  ]
                }}
              ></EchartsCom>
            </div>
          </Col>
          <Col xs={{ span: 24 }} xl={{ span: 8 }} className="echart-item-col">
            <div className="echart-item-div"></div>
          </Col>
          <Col xs={{ span: 24 }} xl={{ span: 8 }} className="echart-item-col">
            <div className="echart-item-div"></div>
          </Col>
        </Row>
      </div>
      {/* todolist 组件 */}
      <TodoList insertTodoList={insertTodoList} />
    </div>
  )
}

export default HomeDom
