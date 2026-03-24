import React from "react";
export class StateManagement extends React.Component{
    constructor(){
        super();
        this.state = {
            place : "bangalore"
        }
    }
    changetext(){
        this.setState({place:"mysore"})
    }
    render(){
        return(
            <>
            <h1>{this.state.place}</h1>
            <button onClick={()=>this.changetext()}>Change</button>
            </>
        )
    }
}