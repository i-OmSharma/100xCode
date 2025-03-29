import { useEffect, useState } from "react"



function useInterval() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])


    return count
}


function Interval() {

    const count = useInterval()

    return(
        <>
            Count is {count}
        </>
    )
}

export default Interval