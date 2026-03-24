import { createContext, useState } from "react"
import { ChildComponent } from "./ChildComponent";
import { Consumer } from "./Consumer";

export const UserContext = createContext();

export default function Context(){
    const [name, setName] = useState("Bunty");
    return(
        <>
        <UserContext.Provider value = {{name, setName}}>
            {/* <ChildComponent /> */}
           <Consumer />
        </UserContext.Provider>
        </>
    )
}