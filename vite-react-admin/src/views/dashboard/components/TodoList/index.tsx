import { useState } from "react"
import { Button, Input, List } from "antd"
import styles from "./index.module.scss"

interface ITodo {
  key: number
  title: string
  selected: boolean
}

const TodoList = () => {
  const [inputValue, setInputValue] = useState("")
  const [todoList, insertTodoList] = useState<ITodo[]>([
    {
      key: 22334,
      title: "学习",
      selected: false
    }
  ])
  function inputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }
  /** 新增按钮 */
  const insertTodo = () => {
    insertTodoList([
      ...todoList,
      {
        key: new Date().getTime(),
        title: inputValue,
        selected: false
      }
    ])
    setInputValue("")
  }
  /** 列表的点击事件 */
  function todoItemClick(selectedItem: ITodo) {
    const updatedItems = todoList.map(item => {
      if (item.key === selectedItem.key) {
        item.selected = !selectedItem.selected
        return item
      }
      return item
    })
    // 更新状态，替换原数组
    insertTodoList(updatedItems)
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
        header={<div className={styles["header"]}>今日计划清单</div>}
        bordered
        dataSource={todoList}
        renderItem={(item: any) => (
          <List.Item onClick={() => todoItemClick(item)}>
            <div className={styles["todo-item"]}>
              <span
                className={`iconfont ${
                  item.selected ? "icon-xuanzhong" : "icon-xuanze"
                }`}
              ></span>
              <span className={styles["title"]}>{item.title}</span>
            </div>
          </List.Item>
        )}
      />
    </div>
  )
}
export default TodoList
