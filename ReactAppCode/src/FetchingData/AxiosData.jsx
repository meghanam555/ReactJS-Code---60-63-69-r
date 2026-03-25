import axios from "axios";
import { useEffect, useState } from "react"

export default function AxiosData(){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>setPosts(res.data))
            .catch((err)=>console.error(err))
        
    }, [])
    return(
        <>
        <ul>
            {
                posts.map((p)=>(
                    <li key={p.id}>{p.body}</li>
                ))
            }
        </ul>
        </>
    )
}