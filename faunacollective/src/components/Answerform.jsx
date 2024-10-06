import React, {useState} from "react";

const Answerform = ({flashcardData,currentIndex}) => {
    const [answer, setAnswer] = useState('');
    const [correct_input, setCheckedInput] = useState('');

    const checkAnswer = (e) => {
        e.preventDefault()
        if (answer.toLowerCase() === flashcardData[currentIndex].answer.toLowerCase()) {
            setCheckedInput('correct');
        } else {
            setCheckedInput('wrong');
        }
    }


    return (
        <div>
                <input id = {correct_input}
                type = "text" 
                value={answer} 
                onChange={(e) => setAnswer(e.target.value)} 
                placeholder="Enter your answer" 
                />

                <button type="submit" className = "button submitBtn" onClick = {checkAnswer}>Submit</button>
        </div>
    )
}

export default Answerform;