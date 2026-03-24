import { useParams } from "react-router-dom"

export default function UserProfile(){
    const {id} = useParams();
    return(
        <>
        <h1>Dynamic Routing</h1>
        <h1>Products with id : {id}</h1>
        </>
    )
}