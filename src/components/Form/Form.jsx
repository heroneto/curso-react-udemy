import { useRef, useState } from "react"

export function Form() {

  const userInputRef = useRef('')

  function handleSubmit(e) {
    e.preventDefault()

    console.log('username ', userInputRef.current.value)

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={userInputRef} />
      <button type='submit'>Enviar</button>
    </form>
  )
}