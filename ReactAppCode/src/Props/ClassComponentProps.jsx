import React from "react"
export class ClassComponentProps extends React.Component{
    render(){
        return(
            <>
            <div style={{width: "300px", height:"500px", border:"2px solid blue", borderRadius:"10px", margin: "20px", padding:"20px", backgroundColor:"pink"}}>
                <h1>--------- Employee Details ----------</h1>
                <h2>Name : {this.props.name}</h2>
                <h2>Age : {this.props.age}</h2>
                <h2>Designation : {this.props.designation}</h2>
                <h2>Place : {this.props.place}</h2>
                <h2>Does he had Lunch : {this.props.ishadfood}</h2>
                {
                    this.props.skills?.map((skill, index)=>(
                        <li key={index}>{skill}</li>
                    ))
                }
                <h1>{this.props.children}</h1>
            </div>
              

            </>
        )
    }
}