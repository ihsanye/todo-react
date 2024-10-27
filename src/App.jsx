import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  console.log(todos)

  return (
    <div className='container'>
      <TodoCreate onCreateTodo={addTodo} />
      <TodoList />
    </div>
  )
}

export default App
