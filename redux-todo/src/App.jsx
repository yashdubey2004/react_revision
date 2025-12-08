import { useState } from 'react'
import AddTodo from './components/addTodo.jsx'
import Todo from './components/Todo.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Redux</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
