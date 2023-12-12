import React from 'react'
import { Row, Col } from 'antd'
import './index.scss'
import HomeCard from './components/HomeCard'
import TodoList from './components/TodoList'
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
            </div>
          </Col>
          <Col xs={{ span: 24 }} xl={{ span: 8 }} className="echart-item-col">
            <div className="echart-item-div">
            </div>
          </Col>
          <Col xs={{ span: 24 }} xl={{ span: 8 }} className="echart-item-col">
            <div className="echart-item-div">
            </div>
          </Col>
        </Row>
      </div>
      {/* todolist 组件 */}
      <TodoList insertTodoList={insertTodoList} />
    </div>
  )
}

export default HomeDom
