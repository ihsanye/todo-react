import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io"
import { FaEdit } from "react-icons/fa"


function Todo() {
    return (
        <div className='todo'>
            <div className='todos'>ilk todo</div>
            <div id='edit-buttons'>
                <IoIosRemoveCircle />
                <FaEdit />
            </div>
        </div>
    )
}

export default Todo