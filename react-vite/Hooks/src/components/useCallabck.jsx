//"useCallabck" it is used to memorize function, which can help in optimizing the performance of ur application, 
//especially in cases of involving child components that rely on reference equality to prevent unnecessary renders.

import { memo, useCallback, useState } from "react";

function App() {
    const [count, setCount] = useState(0)

    const inputFunction = useCallback(() => {
        console.log("hi there");
    }, [])

    return <div>
        <ButtonComponent inputFunction={logSomething}></ButtonComponent>
        <button onclick={() => {
            setCount(count+1)
        }}>Click {count}</button>
    </div>
}

const ButtonComponent = memo(({inputFunction}) => {
    console.log("child render");

    return <div>
        <button onClick={inputFunction}> Button Clicked </button>
    </div>
    
})

export default App 