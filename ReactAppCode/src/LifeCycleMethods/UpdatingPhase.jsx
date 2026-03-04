import React from "react";
export class UpdatingPhase extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
        console.log("Constructor executing");
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Component Update Phase")
        console.log("Previous Count : " + prevState.count)
        console.log("Current Count : " + this.state.count)
    }
    increment = ()=>{
        this.setState({
            count : this.state.count + 1
        })
    }
    render(){
        console.log("Render Updating UI")
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}>Increment</button>
            </>
        )
    }
}