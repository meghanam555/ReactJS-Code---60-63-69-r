import { useEffect, useState } from "react"

export default function UpdatingPhase123(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("Updating Count : ", count);
    }, [count])
  
    return(
        <>
        <h1>Its an Functional Component</h1>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}