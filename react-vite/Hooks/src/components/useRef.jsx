// import { useEffect, useRef, useState } from "react";

// function App() {
//     cosnt [incomeTax, setIncomeTax]  = useState(20000)

//     const divRef = useRef()

//     useEffect(() => {
//         setTimeout(() => {
//             document.getElementById("incomeTaxContainer").innerHTML = "10"
//         }, 5000)
//     }, [])

    

//     return(
//         <div>
//             hi there ur incometax return is <div id="incomeTaxContainer">{incomeTax}</div>
//         </div>
//     )
// }

// export default App




//useRef

import { useEffect, useRef } from "react";

function App() {
    const divRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            divRef.current.innerHTML = "10"
        }, 5000)
    }, [])

    const incomeTax = 20000

    return(
        <div>
            hi there ur incometax return is <div ref={divRef}>{incomeTax}</div>
        </div>
    )
}

export default App