import React, {useState} from "react";

const Answerform = ({flashcardData,currentIndex,streak,setStreak,highestStreak,setHighestStreak}) => {
    const [answer, setAnswer] = useState('');
    const [correct_input, setCheckedInput] = useState('');

    const checkAnswer = (e) => {
        e.preventDefault()
        // Remove the 'a' from answer and convert the answer to lowercase and same for the user answer
        const correctAnswer = flashcardData[currentIndex].answer.toLowerCase().replace(/^a\s*/, "").trim();
        const userAnswer = answer.toLowerCase().replace( /^a\s*/, "").trim();

        if (correctAnswer === userAnswer) {
            setCheckedInput('correct');
            setStreak(streak + 1);
        } else {
            if(streak + 1 > highestStreak) {
                setHighestStreak(streak);
            }
            setCheckedInput('wrong');
            setStreak(0);
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