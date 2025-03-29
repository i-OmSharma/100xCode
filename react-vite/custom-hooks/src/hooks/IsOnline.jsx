import { useEffect, useState } from "react";

function useIsOnline() {
    const[isOnline, setIsOnline] = useState(navigator.onLine)

    useEffect(() => {

        const handleOnline = () => setIsOnline(true)
        const handleOffline = () => setIsOnline(false)

        window.addEventListener("online", handleOnline)

        window.addEventListener("offline", handleOffline)

        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }

    }, [])

    return isOnline

    
}

function IsOnline() {
    const isOnline = useIsOnline();

    return (
        <div>
            {isOnline ? "You are connected" : "You are Offline"}
        </div>
    )
}

export default IsOnline