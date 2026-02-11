import React from "react"
export class ListRendering extends React.Component{
    render(){
        // const details = [1, "Akhil", 21, "Hyderabad", "HarryPotter", 5.2]
        const products = [
            {
                id: 1,
                pname : "Trousers",
                pprice : 2500,
                rating : 4
            },
            {
                id: 2,
                pname : "Shirts",
                pprice : 1200,
                rating :5
            },
            {
                id: 3,
                pname : "Handbags",
                pprice : 500,
                rating : 4
            }
        ]
        return(
            <>
          {/* {
            details.map((name, index)=>{
               return <li key={index}>{name}</li>
            })
          } */}
          {
            products.map((product)=>{
                return (
                    <>
                    <li key={product.id}>{product.pname}</li><br></br>
                <li key={product.id}>{product.pprice}</li><br></br>
                <li key={product.id}>{product.rating}</li><br></br>
                    </>
                )
            })
          }
            </>
        )
    }
}