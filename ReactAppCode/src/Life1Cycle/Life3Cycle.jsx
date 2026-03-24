import React from "react"
export default class Life3Cycle extends React.Component{
    componentDidMount(){
        console.log("Component Did Mount executing")
        this.timer = setInterval(()=>{
            console.log("Timer Running")
        }, 1000)
    }
    componentWillUnmount(){
        console.log("Component Will unmount phase executing")
        clearInterval(this.timer);
    }
    render(){
        console.log("Render method executing")
        return(
            <>
            
            </>
        )
    }
}