import React  from "react"
export default class Top extends React.Component{
    render(){
        return(
            <>
            {
                // this.props.value ? <h1>Successful</h1> : <h1>About to succeed</h1>
                this.props.value && <h1>Succedding</h1>
            }
            </>
        )
    }
}