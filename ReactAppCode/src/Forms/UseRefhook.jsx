import { useRef } from "react"

export default function UseRefhook(){
    const inputRef = useRef("");
    const handleFocus = ()=>{
        // inputRef.current.focus();
        alert(`I'm from ${inputRef.current.value}`)
    }
    return(
        <>
        <form>
            <input type="text" placeholder="Enter the place" ref={inputRef}></input><br></br><br></br>
            <button onClick={handleFocus}>Submit</button>
        </form>
        </>
    )
}