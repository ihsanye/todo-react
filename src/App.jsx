import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([newTodo, ...todos])
  }

  const deleteTodo = (todoId) => {
    todos.filter(todo => todo.id !== todoId);
    setTodos([...todos.filter(todo => todo.id !== todoId)])
  }

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })
    setTodos([...updatedTodos]);
  }

  console.log(todos)

  return (
    <div className='container'>
      <TodoCreate onCreateTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onUpdateTodo={updateTodo} />
    </div>
  )
}

export default App
