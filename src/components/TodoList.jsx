import React from 'react'
import Todo from './Todo'

function TodoList({ todos }) {
    return (
        <div className='todo-list'>
            {
                todos && todos.map((todo) =>
                    < Todo todo={todo} key={todo.id} />
                )
            }
        </div>
    )
}

export default TodoList