import React from 'react'
import { Todo } from './model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdOutlineDownloadDone } from 'react-icons/md'

import './styles.css'
import TodoList from './TodoList'
type Props = {
  todo: Todo
  // todo will have the type from the model we created earlier, with the ID, the string and the boolean value.
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <form action='' className='todos__single'>
      {todo.isDone ? (
        <s className='todos__single--text'>{todo.todo}</s>
      ) : (
        <span className='todos__single--text'>{todo.todo}</span>
      )}

      <div>
        <span className='icon'>
          <AiFillEdit />
        </span>
        <span className='icon'>
          <AiFillDelete onClick={() => handleDelete(todo.id)} />
        </span>
        <span className='icon'>
          <MdOutlineDownloadDone onClick={() => handleDone(todo.id)} />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
