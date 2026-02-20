import React from "react";
export default class ConstructorBinding extends React.Component{
    constructor(){
        super();
        this.state = {
            text : "Hii Everyone, Good Afternoon"
        }
        // Constructor Binding
        // this.handleClick = this.handleClick.bind(this);

        // this.clickchange = this.clickchange.bind(this);
    }
    // handleClick(){
    //     this.setState({
    //         text : "Bye Everyone, It's Evening"
    //     })
    // }

    // handleClicks = ()=>{
    //     this.setState(
    //         {
    //             text : "Byee Everyone......."
    //         }
    //     )
    // }

    clickchange(){
        this.setState({
            text : "Now, Start EWorking on Things"
        })
    }

    render(){
        return(
           <>
           <h1>{this.state.text}</h1>
           {/* <button onClick={()=>this.handleClicks()}>Click here for Change</button> */}
           {/* <button onClick={this.handleClicks}>Click here for Change Option</button> */}
           <button onClick={this.clickchange.bind(this)}>Click</button>
            </>
        )
    }
}