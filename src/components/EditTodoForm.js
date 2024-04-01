import React, { useState } from 'react'

export const EditTodoForm = ({updateTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault()
        updateTodo(value, task.id);
        console.log('submit handled');
        // setValue('')
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' value={value} className='todo-input' placeholder='Update Task' onChange={(e) => setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
