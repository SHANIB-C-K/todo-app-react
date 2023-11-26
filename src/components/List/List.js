import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = () => {
  return (
    <div className='todo-list'>
      <article className='todo-item'>
        <p>test task</p>
        <div className='btn-container'>
            <button className='edit-btn'>
                <FaEdit />
            </button>
            <button className='delete-btn'>
                <FaTrash />
            </button>
        </div>
      </article>
    </div>
  )
}

export default List
