import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [change, setChange] = useState('')

  const changeColor = (color) => () => {
    document.body.style.backgroundColor = color
  }

  return (
    <>
      <button onClick={changeColor("red")}>Red</button>
      <button onClick={changeColor("blue")}>Blue</button>
      <button onClick={changeColor("green")}>Green</button>
      <button onClick={changeColor("yellow")}>Yellow</button>
      <button onClick={changeColor("white")}>White</button>
      <button onClick={changeColor("black")}>Black</button>
    </> 
  )
}

export default App
