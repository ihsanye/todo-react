import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io"
import { FaEdit, FaCheck } from "react-icons/fa"


function Todo({ todo, onDeleteTodo, onUpdateTodo }) {

    const { id, content } = todo;
    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);
    const deleteTodo = () => {
        onDeleteTodo(id);
    }
    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request)
        setEditable(false)
    }

    return (
        <div className='todo'>
            <div className='todos'>
                {editable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} id='todo-input' type="text" placeholder='Yeni Todo Giriniz' /> : content}
            </div>
            <div id='edit-buttons'>
                <IoIosRemoveCircle id='delete-btn' className='edit-btn' onClick={deleteTodo} />
                {
                    editable ? <FaCheck id='check-btn' className='edit-btn' onClick={updateTodo} /> : <FaEdit id='edit-btn' className='edit-btn' onClick={() => setEditable(true)} />
                }

            </div>
        </div>
    )
}

export default Todo