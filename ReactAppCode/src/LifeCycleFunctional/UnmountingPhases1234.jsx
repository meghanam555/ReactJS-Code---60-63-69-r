import { useEffect } from "react"

export default function UnmountingPhases1234(){
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Timer Running")
        }, 1000);

        return ()=>{
            clearInterval(timer)
            console.log("Unmounting Phase")
        }
    }, [])
    return(
        <>
        <h1>Functional Component</h1>
        </>
    )
}