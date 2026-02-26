import { useState } from "react"

export function TernaryOperator(){
    const [hadfood, settohadfood] = useState(false)
    return(
        <>
            {
                hadfood ? <h1>He as done with his food </h1> : <p>Not yet eaten</p>
            }
        </>
    )
}