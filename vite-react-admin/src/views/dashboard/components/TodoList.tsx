import { useRef} from 'react'
import { Button, Input, List } from 'antd'
import type { InputRef } from 'antd';

interface IPorps {
  todoList?: any[]
  insertTodoList: (v: any)=> void
}

const TodoList = (props : IPorps) => {
  const { todoList, insertTodoList } = props
  const inputValueRef = useRef<InputRef>(null)
  /** 新增按钮 */
  const insertTodo = () => {
    console.log(inputValueRef.current)
    if (inputValueRef.current) {
      insertTodoList({
        key: new Date().getTime(),
        title: inputValueRef.current.input?.value
      })
    }
  }
  return (
    <div>
      <div>
        <Input
          placeholder="输入些什么"
          ref={inputValueRef}
          style={{ width: '200px', marginRight: '10px' }}
        />
        <Button type="primary" onClick={insertTodo}>
          新增
        </Button>
      </div>
      <List
        header={<div>ToDo List</div>}
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
