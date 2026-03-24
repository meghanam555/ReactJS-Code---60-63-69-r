import { UserContext } from "./Context";

export function Consumer(){
    return(
       <UserContext.Consumer>
        {({name})=><h1>Name : {name}</h1>}
       </UserContext.Consumer>
    )
}