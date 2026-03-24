export default function GrandParent(){
    const user = "Bunty";
    return(
        <Parent user={user}/>
    )
}
function Parent({user}){
    return(
        <Child user={user}></Child>
    )
}
function Child({user}){
    return(
        <GrandChild user = {user}/>
    )
}
function GrandChild({user}){
    return(
        <h1>The name of a guy, who was having lots of girlfriends in  is : {user}</h1>
    )
}