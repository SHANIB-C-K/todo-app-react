import React, { useState } from 'react'
import List from '../List/List'

const Home = () => {
    const [task, setTask] = useState('')
  return (
    <section className='section-center'>
        <form className='todo-form'>
            <h3>Todo App</h3>
            <div className='form-control'>
                <input type='text' placeholder='Enter a task' className='todo' value={task}></input>
                <button type='submit' className='submit-btn'>Submit</button>
            </div>
        </form>
        <div className='todo-container'>
            <List />
            <button className='clear-btn'>clear items</button>
        </div>
    </section>
  )
}

export default Home
