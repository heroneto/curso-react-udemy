import { useCounter } from "../../contexts/CounterContext"

export function Counter() {
  const { count } = useCounter()
  return (
    <h1>Total: {count}</h1>
  )
}