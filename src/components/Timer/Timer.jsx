import { useEffect, useState } from "react"


export function Timer() {
  const [time, setTime] = useState(0)

  useEffect(() => {
    console.log("Iniciando o nosso timer")
    const timer = setInterval(() => {
      setTime(value => value + 1)
    }, 1000) // 1s


    return () => {
      console.log("Finalizando o nosso Timer")
      clearInterval(timer)
    }
  }, [])



  return (
    <div>
      <h1>
        Timer
      </h1>

      <span>{time}</span>
    </div>
  )
}