import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext(null)



function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1 < 0 ? state : state - 1
  }
}


export default function CounterProvider({ children }) {
  const [count, counterDispatch] = useReducer(counterReducer, 0)


  return (
    <CounterContext.Provider value={{
      count,
      counterDispatch
    }}>
      {children}
    </CounterContext.Provider>
  )
}

export function useCounter() {
  return useContext(CounterContext)
}