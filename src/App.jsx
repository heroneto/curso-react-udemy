import { useState } from 'react'
import { GitUserList } from './components/GitUserList/GitUserList'

function App() {

  const [showTimer, setShowTimer] = useState(true)

  return (
    // <Form />
    <GitUserList />
    // <>
    //   {showTimer && (
    //     <Timer />
    //   )}
    //   <button onClick={() => setShowTimer(false)} type='button'>Fechar timer</button>
    // </>
    // <CounterProvider>
    //   <Counter />
    //   <ActionButtons />
    // </CounterProvider>
  )
}

export default App