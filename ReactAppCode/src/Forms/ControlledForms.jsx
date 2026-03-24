import { useState } from "react"

export default function ControlledForms(){
    const [name, setName] = useState("");
    const handleFocus = (e)=>{
        e.preventDefault();
        alert(`Hello, ${name}`)
    }
    return(
        <>
        <form>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}></input><br></br><br></br>
            <button onClick={handleFocus}>Submit</button>
        </form>
        </>
    )
}