import { useNavigate } from "react-router-dom"

export default function UseNavigation(){
   const navigate =  useNavigate();
    return(
        <>
         <button onClick={()=>navigate("/")}>Go to Home Page</button>
         <button onClick={()=>navigate(-1)}>Go Back</button>
        </>
    )
}