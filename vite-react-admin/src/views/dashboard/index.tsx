
import "./index.scss"
import HomeCard from "./components/HomeCard"
import TodoList from "./components/TodoList"
import EchartsCard from "./components/EchartsCard"

const HomeDom = () => {
  function insertTodoList(v) {
    console.log(v)
  }
  return (
    <div>
      {/* 头部分块 */}
      <HomeCard />
      {/* Echarts 组件 */}
      <EchartsCard></EchartsCard>
      {/* todolist 组件 */}
      <TodoList insertTodoList={insertTodoList} />
    </div>
  )
}

export default HomeDom
