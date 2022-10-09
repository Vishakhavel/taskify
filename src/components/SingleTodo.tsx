import React, { useState, useEffect, useRef } from 'react'
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
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)
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

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    )

    setEdit(false)
  }

  // this is to make the control go into the edit todo input element automatically, without needing to click it manually
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  return (
    <form className='todos__single' onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className='todos__single--text'
          ref={inputRef}
        />
      ) : todo.isDone ? (
        <s className='todos__single--text'>{todo.todo}</s>
      ) : (
        <span className='todos__single--text'>{todo.todo}</span>
      )}

      <div>
        <span className='icon'>
          <AiFillEdit
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit)
              }
            }}
          />
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
