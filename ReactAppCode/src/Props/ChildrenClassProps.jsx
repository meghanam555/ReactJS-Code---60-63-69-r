import React from "react";
export default class ChildrenClassProps extends React.Component{
    render(){
        return(
            <>
            <h1>Okk</h1>
            {this.props.children}
            </>
        )
    }
}