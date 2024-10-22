//first define state and component
// hook
import { useState } from "react";

// let state = {
//   count: 0
// }

function App() {
  const [count, setCount] = useState(0); //[1, 2]

  // function onClickHandler () {
  //   //state.count = state.count + 1;//wrong way to set react variables
  //   setCount(count + 1);
  // }


  // return (
  //   <div>
  //     <button onClick={onClickHandler}>Counter  {count}</button>
  //   </div>
  // )

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )

}

function CustomButton(props) {
 
  function onClickHandler () {
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}> Counter {props.count} </button>
  
}
export default App