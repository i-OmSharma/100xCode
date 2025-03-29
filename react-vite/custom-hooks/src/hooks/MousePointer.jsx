import { useEffect, useState } from "react"

function useMousePointer () {
    const [position, setPosition] = useState({x:0, y:0})

    const handleMouseMovement = (e) => {
        setPosition({x: e.clientX, y: e.clientY})
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMovement)

        return() => {
            window.removeEventListener('mousemove', handleMouseMovement)
        }
    }, [])

    return position
}


function MousePointer() {

    const mousePointer = useMousePointer()

    return(
        <div>
            Your Position is {mousePointer.x} {mousePointer.y}
        </div>
    )
}

export default MousePointer