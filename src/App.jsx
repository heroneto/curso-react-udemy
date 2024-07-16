import { Counter } from './components/Counter'
import { ActionButtons } from './components/ActionButtons/ActionButtons'
import CounterProvider from './contexts/CounterContext'
import { Form } from './components/Form/Form'

function App() {

  return (
    <Form />

    // <CounterProvider>
    //   <Counter />
    //   <ActionButtons />
    // </CounterProvider>
  )
}

export default App