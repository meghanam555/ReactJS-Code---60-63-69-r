import { useState } from "react"

export default function LogicalAnd(){
    const [login, setlogin ] = useState(false)
    return(
        <>
        {
            login && <h1>The candidate as logged in Succesfully</h1>
        }
        </>
    )
}