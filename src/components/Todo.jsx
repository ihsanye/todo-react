import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io"
import { FaEdit } from "react-icons/fa"


function Todo({ todo }) {

    const { id, content } = todo;

    return (
        <div className='todo'>
            <div className='todos'>
                {content}
            </div>
            <div id='edit-buttons'>
                <IoIosRemoveCircle />
                <FaEdit />
            </div>
        </div>
    )
}

export default Todo