import { useContext, useState } from 'react'
import { CountContext } from './context'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountContext.Provider value={Count}>
        <Count setCount={setCount} /> // now remove the count from here.
      </CountContext.Provider>
      
    </>
  )
}

function Count({count, setCount}) {
  return <div>
    <CountRenderer count={count} />
    <Button count={count} setCount={setCount} />
  </div>
}

function CountRenderer({}) {
  const count  = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Button({count, setCount}) {
  return <div>
    <button onClick={() => {
      setCount(count+1)
    }}>Add Todo</button>
  </div>
} 

export default App
