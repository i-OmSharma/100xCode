import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    //Flex:
    // <>
    //   <div style={{display: "flex", justifyContent: "space-around"}}>
    //     <div style={{backgroundColor: "red"}}>Hi</div>
    //     <div style={{backgroundColor: "green"}}>Hey</div>
    //     <div style={{backgroundColor: "cyan"}}>Hello</div>
    //   </div>

    //   <div className='flex justify-betwee'>
    //     <div className='bg-red-500'>Hi</div>
    //     <div style={{backgroundColor: "green"}}>Hey</div>
    //     <div style={{backgroundColor: "cyan"}}>Hello</div>
    //   </div>
    // </>

    //grid
    <>
    <div className='grid grid-cols-10'>
      <div className='bg-red-500 col-span-4'>hi</div>
      <div className='bg-green-500 col-span-4' >hey</div>
      <div className='bg-cyan-500 col-span-2'>Hello</div>
    </div>

    <div className='flex'>
      <div className='bg-red-500 w-[40%]'>hi</div>
      <div className='bg-green-500 w-[40%]'>hey</div>
      <div className='bg-cyan-500 w-[20%]'>Hello</div>
    </div>
  </>
  )
}

export default App
