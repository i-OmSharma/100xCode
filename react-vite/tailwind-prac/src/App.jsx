import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    //Flex:
    <>
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <div style={{backgroundColor: "red"}}>Hi</div>
        <div style={{backgroundColor: "green"}}>Hey</div>
        <div style={{backgroundColor: "cyan"}}>Hello</div>
      </div>

      <div className='flex justify-betwee'>
        <div className='bg-red-500'>Hi</div>
        <div style={{backgroundColor: "green"}}>Hey</div>
        <div style={{backgroundColor: "cyan"}}>Hello</div>
      </div>
    </>
  )
}

export default App
