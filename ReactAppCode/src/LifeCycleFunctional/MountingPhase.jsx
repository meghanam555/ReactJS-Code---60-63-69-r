import { useEffect } from "react"

export default function MountingPhase(){

    useEffect(()=>{
        console.log("Mounting Phase")
    }, [])
    return(
        <>
        <h1>Hello, its an Functional Component</h1>
        </>
    )
}