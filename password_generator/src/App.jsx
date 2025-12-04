import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [spcl, setSpcl] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (number) {
      chars += "0123456789"
    }
    if (spcl) {
      chars += "!@#$%^&*()"
    }
    let pass = ""
    for (let i = 0; i < length; i++) {
      const ridx = Math.floor(Math.random() * chars.length)
      pass += chars[ridx]
    }
    setPassword(pass)
  }, [length, number, spcl, setPassword])

  useEffect(() => { generatePassword()}, [generatePassword, length, number, spcl])

  const copyText = () => {
    navigator.clipboard.writeText(password)
  }
  return (
    <>
      <div>
        <h2>Password Generator</h2>
        <input type="text" value={password} readOnly />
        <br />
        <label>Password Length</label>
        <input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} ref={passwordRef} />
        <br />
        <label>
          <input type="checkbox" checked={number} onChange={(e) => setNumber(e.target.checked)} />
          Include Numbers
        </label>
        <br />
        <label>
          <input type="checkbox" checked={spcl} onChange={(e) => setSpcl(e.target.checked)} />
          Include Special Characters
        </label>
        <br />
        <label>
          <input type="button" value="Copy" onClick={copyText} />
        </label>
      </div>
    </>
  )
}

export default App;
