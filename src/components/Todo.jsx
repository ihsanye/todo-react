import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io"
import { FaEdit } from "react-icons/fa"


function Todo({ todo, onDeleteTodo }) {

    const { id, content } = todo;

    const deleteTodo = () => {
        onDeleteTodo(id);
    }

    return (
        <div className='todo'>
            <div className='todos'>
                {content}
            </div>
            <div id='edit-buttons'>
                <IoIosRemoveCircle className='edit-btn' onClick={deleteTodo} />
                <FaEdit className='edit-btn' />
            </div>
        </div>
    )
}

export default Todo