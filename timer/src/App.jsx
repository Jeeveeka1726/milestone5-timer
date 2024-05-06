import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increaseCount = () =>{
    setCount(count+1)
  }

  const timeout = setTimeout(increaseCount,1000)

  function stopTimer(){
    clearTimeout(timeout)
    document.cookie="count=;expires=Thu, 1 Jan 1999 00:00:00 UTC";
  }

  const pauseTimer = () => {
    setCount(count)
  }

  document.cookie="count="+`${count}`

  return (
    <>
      <div>
        <p style={{color: count%2==0 ? 'red' : 'green'}}>{count}</p>
      </div>
      <button onClick={increaseCount}>Play</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={stopTimer}>Stop</button>
    </>
  )
}

export default App
