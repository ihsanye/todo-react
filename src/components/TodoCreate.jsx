import React, { useState } from 'react'

function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState('');

    const clearInput = () => {
        setNewTodo('');
    }

    const createTodo = () => {
        if (!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 999999),
            content: newTodo
        }
        onCreateTodo(request)
        clearInput();
    }

    return (
        <div className="todo-create">
            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} id='todo-input' type="text" placeholder='Todo Giriniz' />
            <button onClick={createTodo} id='todo-create-btn'>Todo Olustur</button>
        </div>
    )
}

export default TodoCreate