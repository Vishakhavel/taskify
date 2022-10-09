import React, { Fragment, useRef } from 'react'
import './styles.css'

// Got this from hovering over the setTodo in definition
// const setTodo: React.Dispatch<React.SetStateAction<string>>

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <Fragment>
      <form
        className='input'
        onSubmit={(e) => {
          handleAdd(e)
          inputRef.current?.blur()
        }}
      >
        <input
          ref={inputRef}
          className='input__box'
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value)
          }}
          type='input'
          placeholder='enter a task'
        />
        <button className='input__submit' type='submit'>
          Go
        </button>
      </form>
    </Fragment>
  )
}

export default InputField
