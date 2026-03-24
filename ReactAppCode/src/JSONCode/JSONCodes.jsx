import data from "../../public/JSONCodess.json"

export default function JSONCodes(){
    return(
        <>
        <ul>
            {
                data.map((item, index)=>{
                    return <li key={index}>{item.place}</li>
                })
            }
        </ul>
        </>
    )
}