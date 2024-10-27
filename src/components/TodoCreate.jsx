import React from 'react'

function TodoCreate() {
    return (
        <div className="todo-create">
            <input id='todo-input' type="text" placeholder='Todo Giriniz' />
            <button id='todo-create-btn'>Todo Olustur</button>
        </div>
    )
}

export default TodoCreate