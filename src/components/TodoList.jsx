import React from 'react'
import Todo from './Todo'

function TodoList({ todos, onDeleteTodo, onUpdateTodo }) {
    return (
        <div className='todo-list'>
            {
                todos && todos.map((todo) =>
                    < Todo todo={todo} key={todo.id} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo} />
                )
            }
        </div>
    )
}

export default TodoList