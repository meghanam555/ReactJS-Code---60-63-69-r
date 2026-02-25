import { useState } from "react"

export default function ToggleLogin(){
    const [islogin, setlogin] = useState(true);
    return(
        <>
        <h1>{islogin ? "LoggedIn Successfully" : "Please Login with your Credentials"}</h1>
        <button onClick={()=>setlogin(!islogin)}>{islogin ? "Logout" : "Login"}</button>
        </>
    )
}