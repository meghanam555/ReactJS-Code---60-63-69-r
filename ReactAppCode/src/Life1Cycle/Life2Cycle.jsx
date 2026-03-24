import React from "react"
export default class Life2Cycle extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
        console.log("Constructor executing")
    }
    increment = ()=>{
        this.setState({
            count : this.state.count + 1
        })
    }
    componentDidUpdate(prevProps, prevState){
        console.log("ComponentDidUpdate");
        console.log("Previous Count : " + prevState.count)
        console.log("Current Count : " + this.state.count)
    }
    render(){
        console.log("Remder method executing")
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}>Click Here</button>
            </>
        )
    }
}