import { useState } from "react";

export function Assigment1() {
    const [input, setInput] = useState(0)

    let expensiveValue = 1;
    for (let i = 1; i <= input; i++) {
            expensiveValue = expensiveValue * i;
    }
    return (
        <div>
            <input type="number" value={input} onChange={(e) => setInput(Number(e.target.value))} />
            <p>Calaulate Value: {expensiveValue}</p>
        </div>
    )
}