//Everything needs to be inside App
//u cant crete muliple components 

import { useState } from "react";

function App() {
    const[counter, setCounter] = useState(0)
    const[inputValue, setInputValue] = useState(1) 

    let count = 0;
    for (let i = 1; i <= inputValue; i++) {
        count = count + i;
    }

    return <div>
        <input onChange={ (e) => {
            setInputValue(e.target.value)
        }} placeholder="sum 1 to n"/>
        <br />
        sum from 1 to {inputValue} is {count}
        <br />
        <button onClick={() => {setCounter(counter+1)}}>click{counter}</button>
    </div>
}

export default App;

//the problem with this is ki, here when the button is clicked it cause re-render which is very expensive operation,
//the value is same as the previous render  and the new one but, its expensive to  run the loop every time on re render 