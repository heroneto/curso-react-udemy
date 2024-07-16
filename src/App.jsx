import { Counter } from './components/Counter'
import { ActionButtons } from './components/ActionButtons/ActionButtons'
import CounterProvider from './contexts/CounterContext'

function App() {

  return (
    <CounterProvider>
      <Counter />
      <ActionButtons />
    </CounterProvider>
  )
}

export default App
