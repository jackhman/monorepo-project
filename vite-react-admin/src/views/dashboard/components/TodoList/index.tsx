import { useState } from "react"
import { Button, Input, List } from "antd"
import styles from "./index.module.scss"

interface ITodo {
  key: number
  title: string
}

const TodoList = () => {
  const [inputValue, setInputValue] = useState("")
  const [todoList, insertTodoList] = useState<ITodo[]>([])
  function inputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }
  /** 新增按钮 */
  const insertTodo = () => {
    insertTodoList([
      ...todoList,
      {
        key: new Date().getTime(),
        title: inputValue
      }
    ])
    setInputValue("")
  }
  return (
    <div className={styles["todo-box"]}>
      <div className={styles["insert-box"]}>
        <Input
          placeholder="输入些什么"
          value={inputValue}
          style={{ marginRight: "10px" }}
          onChange={inputChange}
          onPressEnter={insertTodo}
        />
        <Button type="primary" onClick={insertTodo}>
          新增
        </Button>
      </div>
      <List
        header={<div>今日计划清单......</div>}
        bordered
        dataSource={todoList}
        renderItem={(item: any) => (
          <List.Item className="todo-item">{item.title}</List.Item>
        )}
      />
    </div>
  )
}
export default TodoList
