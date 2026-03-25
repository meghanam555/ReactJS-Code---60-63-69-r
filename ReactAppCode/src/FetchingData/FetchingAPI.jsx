import { useEffect, useState } from "react"

export default function FetchingAPI(){
    const [users, setUser] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>setUser(data))
        .catch((err)=>console.error("Fetching Data Error", err))
    },[])
    return(
        <>
        {
          users.map((u)=>(
           <>
            <li key={u.id}>{u.name}</li>
            <li key={u.id}>{u.address.street}</li>
           </>
          )) 
        }
        </>
    )
}