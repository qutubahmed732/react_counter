import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = ()=>{
    if(counter < 10) {
      counter = counter + 1;
    }
    setCounter(counter)
  }
  const removeValue = ()=>{
    if(counter > 0) {
      counter = counter - 1;
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai or react</h1>
      <h1>Ye 10 se upar nahi jayega or 0 se neeche nahi</h1>
      <h2>Counter Value: {counter}</h2>

      <button style={{marginBlockEnd: '20px'}} onClick={addValue}>add value</button>
      <br />
      <button onClick={removeValue}>decrease value</button>
    </>
  )
}

export default App
