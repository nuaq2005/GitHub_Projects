import React, { useState } from 'react';

const Flashcard =(props)=>{
    //flip card 
    const upDateFlip = () => {
        props.setFlip(!props.flipped);
    } 
    
    return(
    <div className = {"Flashcard"} onClick = {upDateFlip}>
        <h5> {props.flipped? props.answer : props.question} </h5> 
    </div>
    )
}

export default Flashcard;