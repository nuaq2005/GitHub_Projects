import React from 'react';
const Flashcard =(props)=>{
    //flip card
    const [flip, setFlip] = React.useState(false); 
    const upDateFlip = () => {
        setFlip(!flip);
    }
    //arrow buttons
    const [propsId, setPropsId] = React.useState(0);
    const goLeft = () => {
        if(propsId === 0){
            setPropsId(props.data.length - 1);
        }else{
            setPropsId(propsId - 1);
        }
    } 

    const goRight = () => {
        if(propsId === props.data.length - 1){
            setPropsId(0);
        }else{
            setPropsId(propsId + 1);
        }
    }  

    return(
        <div className = {'Card'} onClick = {upDateFlip}>
            <div className = "front"> 
                <h5> {props.question} </h5>
            </div>
            <div className = "back"> 
                <h5> {props.answer} </h5>
            </div>
            <div className = "arrows">
                <span>
                    <button onClick = {goLeft}> ← </button>
                    <button onClick = {goRight}> → </button>
                </span>
            </div>
        </div>
    )
}
export default Flashcard;