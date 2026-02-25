import { useState } from "react"

export default function Onchange(){
    const [name, setName] = useState("");
    
    const handleChange = (e)=>{
        setName(e.target.value)
    }
    return(
        <>
        <input type="text" placeholder="Enter your name" onChange={handleChange}></input>
        <h1>Name : {name}</h1>
        </>
    )
}