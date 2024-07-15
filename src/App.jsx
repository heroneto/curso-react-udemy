import { useReducer } from 'react'

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1 < 0 ? state : state - 1
  }
}

function App() {
  // const [count, setCount] = useState(0)
  const [count, counterDispatch] = useReducer(counterReducer, 0)

  // function decrement() {
  //   setCount((valor) => {
  //     return valor - 1
  //   })
  // }

  // function increment() {
  //   setCount(10)
  // }

  return (
    <>
      <h1>Contador: {count}</h1>
      <button type='button' onClick={() => counterDispatch({ type: 'decrement' })}>Reduzir</button>
      <button type='button' onClick={() => counterDispatch({ type: 'increment' })}>Aumentar</button>
    </>
  )
}

export default App
