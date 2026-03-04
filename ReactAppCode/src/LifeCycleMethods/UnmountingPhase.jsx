import React from "react";
export default class UnmountingPhase extends React.Component{
    componentDidMount(){
        console.log("ComponentDidMount Phase executing...")
        this.timer = setInterval(()=>{
            console.log("Timer Running")
        }, 1000)
    }

    componentWillUnmount(){
        console.log("Component will unmount phase...")
        clearInterval(this.timer)
    }

    render(){
        console.log("Render Updating UI");
        return(
            <>
            
            </>
        )
    }
}