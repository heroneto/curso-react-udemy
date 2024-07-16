import { useCounter } from "../../contexts/CounterContext"


export function ActionButtons() {
  const { counterDispatch } = useCounter()

  return (
    <>
      <button type='button' onClick={() => counterDispatch({ type: 'decrement' })}>Reduzir</button>
      <button type='button' onClick={() => counterDispatch({ type: 'increment' })}>Aumentar</button>
    </>
  )
}