import React from 'react';
const Flashcard =(props)=>{
    //flip card
    const [flipped, setFlip] = React.useState(false); 
    const upDateFlip = () => {
        setFlip(!flipped);
    } 
    
    return(
    <div className = {"Flashcard"}>
            <div className = 'card-content' onClick = {upDateFlip} > 
                <h5> {flipped? props.answer : props.question} </h5> 
            </div>
    </div>
    )
}

export default Flashcard;