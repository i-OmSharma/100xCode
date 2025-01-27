import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  const [count, setCount] = useState(0)

  // return (
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
  //   <>
  //   <div className='grid grid-cols-10'>
  //     <div className='bg-red-500 col-span-4'>hi</div>
  //     <div className='bg-green-500 col-span-4' >hey</div>
  //     <div className='bg-cyan-500 col-span-2'>Hello</div>
  //   </div>

  // <div>
  // {/* //using flex
  //   <div className='flex'>
  //     <div className='bg-red-500 w-[40%]'>hi</div>
  //     <div className='bg-green-500 w-[40%]'>hey</div>
  //     <div className='bg-cyan-500 w-[20%]'>Hello</div>
  //   </div> */}
  // </div>

  // </>

  // <>
  //   <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
  //   <div className='bg-red-500 dark:bg-gren-500'>hi</div>
  //   <div className='bg-green-500' >hey</div>
  //   <div className='bg-cyan-500'>Hello</div>
  //   </div>
  // </>
return(
  <div className='grid grid-cols-4'>
    <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/>
  </div>
  )
}

export default App
