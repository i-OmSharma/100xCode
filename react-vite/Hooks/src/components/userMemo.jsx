import { useEffect, useMemo, useState } from "react";
import { useState } from "react";

function App() {
    const[counter, setCounter] = useState(0)
    const[inputValue, setInputValue] = useState(1) 
    const[finalValue, setFinalValue] = useState(0) // updating another here, so again re-render         
    // we should not define 2 state variable completely dependent on each other
    useEffect(() => {
        let finalcount = 0;
        for (let i = 1; i <= inputValue; i++) { //good aproach
            finalcount = finalcount + i;
        }
        setFinalValue(count)
    }, [inputValue])

    return <div>
        <input onChange={ (e) => {
            setInputValue(e.target.value)
        }} placeholder="sum 1 to n"/>
        <br />
        sum from 1 to {inputValue} is {finalValue}
        <br />
        <button onClick={() => {setCounter(counter+1)}}>click{counter}</button>
    </div>
} 

export default App;


// Using useMemo


import { useEffect, useState } from "react";
import { useState } from "react";

function App() {
    const[counter, setCounter] = useState(0)
    const[inputValue, setInputValue] = useState(1) 

    let count = useMemo(() => {
        let count = 0;
        for (let i = 1; i <= inputValue; i++) { //good aproach
            count = count + i;
        }
        setFinalValue(count)
    }, [inputValue])

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


