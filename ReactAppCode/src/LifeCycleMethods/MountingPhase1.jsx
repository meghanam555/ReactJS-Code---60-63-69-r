import React from "react";
export default class MountingPhase1 extends React.Component{
    constructor(){
        super();
        this.state = {
            msg : "Hello"
        }
        console.log("Constructor execution happening")
    }
    componentDidMount(){
        console.log("Component Did Mount execution happening");
        setTimeout(()=>{
            this.setState({
                msg : "Ok, Byee"
            })
        }, 2000)
    }
    render(){
        console.log("Render exection happening");
        return(
            <>
            <h1>{this.state.msg}</h1>
            </>
        )
    }
}