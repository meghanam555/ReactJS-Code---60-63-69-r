import "./ConditionalStyling.css"
import React from "react";
export default class ConditionalStyling extends React.Component{
    constructor(){
        super();
        this.state = {
            isboolean : false
        }
    }
    render(){
        return(
            <>
            {/* <p style={{color: "blue", backgroundColor:"pink", textAlign:"center", fontSize:"20px", margin:"30px", padding:"20px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Repudiandae iure earum laudantium adipisci! Ipsam, 
                omnis quasi laudantium quibusdam necessitatibus non eos quaerat,
                 soluta nam eligendi nesciunt sequi odit culpa a!</p> */}
                 {/* <p style={{color: this.state.isboolean ? "blue" : "red", backgroundColor : this.state.isboolean ? "pink" : "black"}}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Amet minima, vel magni corporis, in culpa eveniet saepe aut 
                    veniam similique molestiae,
                     obcaecati officia totam eligendi. Nostrum natus quo ratione qui?
                 </p> */}
                 <p className= {this.state.isboolean ? "online" : "offline"} >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Velit sit est culpa vel, obcaecati in unde!
                      Porro amet totam tempore quod ipsam vitae dolores sed
                       recusandae nemo ad! Nihil, magni.</p>
            </>
            
        )
    }
}