import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function decrement() {
    setCount((valor) => {
      return valor - 1
    })
  }

  function increment() {
    setCount(10)
  }

  return (
    <>
      <h1>Contador: {count}</h1>
      <button type='button' onClick={decrement}>Reduzir</button>
      <button type='button' onClick={increment}>Aumentar</button>
    </>
  )
}

export default App
