import  React from "react";
export class MountingPhase extends React.Component{
    constructor(){
        super();
        this.state = {
            msg : "Hello Everyone, What about 2morrow's plan"
        }
        console.log("Constructor execution")
    }
    componentDidMount(){
        console.log("Component Did Mount Execution");
    }
    changeplan = ()=>{
        setTimeout(()=>{
            this.setState(
                {
                    msg : "There will be no Holiday 2morrow, just learn and grow.."
                } 
            )
        }, 2000)
    }
    render(){
        console.log("Return method executing first")
        return(
            <>
               <h1>{this.state.msg}</h1>
               <button onClick={this.changeplan}>Change Plan</button>
            </>
        )
    }
}