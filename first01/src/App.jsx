import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0)

  function checkzero(){
    if(count <= 0){
      alert("count is zero, cannot decrement further")
      setCount(0)
    }
  }
  function checktwenty(){
    if(count >= 20){
      alert("count is twenty, cannot increment further")
      setCount(20)
    }
  }

  function increment(){
    setCount(count + 1)
    checktwenty()
  }
  function decrement(){
    setCount(count - 1)
    checkzero()
  }

  return (
    <>
    <p>current count: {count}</p>
    <button onClick = {increment}>Increment</button>
    <button onClick = {decrement}>Decrement</button>
    </>
  )
}

export default App
