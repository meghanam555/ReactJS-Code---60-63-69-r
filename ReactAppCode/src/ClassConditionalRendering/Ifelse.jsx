import React from "react";
export default class Ifelse extends React.Component{
    render(){
        if(this.props.booleanvalue){
            return <h1>LoggedIn to office at 7:000AM</h1>
        }
        else{
            return <h1>Not yet LoggedIn, Late login may be</h1>
        }
    }
}