import React from "react";

const Card =(props)=>{
    return(
        <div className = {'Card'}>
            <div>
            <img src = {props.image} className = "card-img"/>
            </div>
            <div className = "card-content">
            <h3> {props.title} </h3>
            <h5> {props.description} </h5>
            </div>
        </div>
    )
}
export default Card;