import { useState } from "react"

export default function StateUplifting(){
    const [count, setCount] = useState(0);
    return(
        <>
        <Child1 count = {count}></Child1>
        <Child2 setcount = {setCount}></Child2>
        </>
    )
}
function Child1({count}){
    return(
        <>
        <h1>Count : {count}</h1>
        </>
    )
}
function Child2({setcount}){
    return(
        <>
        <button onClick={()=>setcount((prev)=>prev+1)}>Increment</button>
        </>
    )
}