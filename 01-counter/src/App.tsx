import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter</h1>
      <div className="card">
        <button onClick={() => setCount(prev => prev + 1)}>+1</button>
        <h2>{count}</h2>
        <button onClick={() => setCount(prev => prev -1)}>-1</button>
      </div>
    </div>
  )
}

export default App
