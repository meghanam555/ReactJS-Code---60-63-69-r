import { useState } from "react";

export default function ConditionalRendering(){
    const [login, setlogin] = useState(false);
    
    if(login){
        return <h1>LoggedIn Successfully</h1>
    }
    else{
        return <h1>Login Failed, Please Login Again!!!</h1>
    }
}