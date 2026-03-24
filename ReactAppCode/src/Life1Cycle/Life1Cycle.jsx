import React from "react";
export default class Life1Cycle extends React.Component{
    constructor(){
        super();
        this.state = {
            msg : "Hello"
        }
        console.log("Constructor executing")
    }
    
    
   componentDidMount(){
    console.log("Component Did mount updating")
    setTimeout(()=>{
        this.setState({
            msg : "OKKK"
        })
    }, 2000)
   }
    render(){
        console.log("Render method Updating UI");
        return(
            <>
            <h1>{this.state.msg}</h1>
            </>
        )
    }
}
