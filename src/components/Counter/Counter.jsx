import { useEffect } from 'react'
import { useCounter } from "../../contexts/CounterContext"

export function Counter() {
  const { count } = useCounter()

  useEffect(() => {

    if (count == 10) {
      alert("O limite do contador é 10")
    }
  }, [count])

  return (
    <h1>Total: {count}</h1>
  )
}