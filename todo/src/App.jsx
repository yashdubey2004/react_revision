import { useState, useEffect, use } from 'react'
import { TodoContextProvider } from './contexts'
import { TodoContext, TodoProvider } from './contexts/TodoContext'
import './App.css'
import TodoForm from './components/todoform'
import TodoItem from './components/todoitem'
// import "tailwind.css"

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
      setTodos((prev) => [...prev, {...todo, id: Date.now()}]);
    }
    const updatetodo = (id, todo) => {
      setTodos((prev) => prev.map((t) => t.id === id ? {...t, ...todo} : t));
    }
    const deletetodo = (id) => {
      setTodos((prev) => prev.filter((t) => t.id !== id));
    }
    const togglecomplete = (id) => {
      setTodos((prev) => 
        prev.map((t) => {
          if (t.id === id) {
            return { ...t, completed: !t.completed };
          }
          return t;
          })
        );
    };

    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("Todos"))
      if(todos){
        setTodos(todos)
      }
    }, [])

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    },[todos])

  return (
    <TodoProvider value = {{todos, addTodo, updatetodo, deletetodo, togglecomplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} />
                        ))}
                    </div>
                </div>
          </div>
    </TodoProvider>
  )
}

export default App
