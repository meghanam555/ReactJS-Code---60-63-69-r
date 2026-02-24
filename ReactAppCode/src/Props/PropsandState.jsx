import { useState } from "react"

export function PropsandState(props){
    const [age, setAge] = useState(props.age)
    return(
        <>
        <h1>Name : {props.name}</h1>
        <h2>Age : {age}</h2>
        <button onClick={()=>setAge(age+1)} >Increase Age</button>
        </>
    )
}