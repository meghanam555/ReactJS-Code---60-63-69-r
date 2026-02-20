import React from "react";
export class CounterApp extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
        this.decrement = this.decrement.bind(this)
    }
    increment=()=>{
        this.setState({
            count : this.state.count + 1
        })
    }
    decrement(){
        this.setState({
            count : this.state.count - 1
        })
    }
    render(){
        return(
            <>
            <h1>Count : {this.state.count}</h1>
            <button style={{margin: "0px", position: "relative", top:"0px", right:"4px"}} onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            </>
        )
    }
}