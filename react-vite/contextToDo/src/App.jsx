import { RecoilRoot  ,useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'


function App() {

  return (
    <div>
      <RecoilRoot >
        <Count /> 
      </RecoilRoot >
    </div>
  )  
}

function Count() {
  return <div>
    <CountRenderer />
    <Button /> 
    <EvenCountRenderer /> 
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom )

  return <div>
    <b>
      {/* {count % 2 === 0 && <p>Even</p>} */}
      {count}
    </b>
  </div> 
}

function EvenCountRenderer() {
  // const count = useRecoilValue(countAtom )
  const isEven = useRecoilValue(evenSelector)

  // {(count % 2 == 0) ? "Even" : null}
  return <div>
    { isEven ? "Even" : null }
  </div>
}

function Button() {
  // const [count, setCount] = useRecoilState(countAtom) //here the button re renders everytime we click the button so we are replacing it with const setCount = useStateRecoilState(countAtom)

  //setCount(Count+1)
  //setCount(c => c + 1)
  //setCount(function(c) {
    //retur c + 1
  //})

  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>
    
    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App

