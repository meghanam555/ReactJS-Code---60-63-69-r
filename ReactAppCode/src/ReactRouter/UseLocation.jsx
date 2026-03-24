import { useLocation } from "react-router-dom"

export default function UseLocation(){
    const location = useLocation();
    return(
        <>
        <h1>Location of the current path : {location.pathname}</h1>
        </>
    )
}