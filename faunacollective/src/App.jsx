import './App.css';
import React, { useState } from 'react';
import Flashcard from './components/Flashcard';

const App = () => {
  const flashcardData = [
    {id: 0, question: 'Begin!', answer: 'Click to reveal answer'},
    {id: 1, question: 'What is a group of lions called?', answer: 'A pride'},
    {id: 2, question: 'What is a group of fish called?', answer: 'A school'},
    {id: 3, question: 'What is a group of crows called?', answer: 'A murder'},
    {id: 4, question: 'What is a group of flamingos called?', answer: 'A flamboyance'},
    {id: 5, question: 'What is a group of ants called?', answer: 'A colony'},
    {id: 6, question: 'What is a group of owls called?', answer: 'A parliament'}
  ];

  //arrow button and flashcard flip state
  const [flipped, setFlip] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    let randomIndex = Math.floor(Math.random() * flashcardData.length)
    setCurrentIndex(randomIndex === 0? 1 : randomIndex);
    setFlip (false); /* sets to false for each new card to keep on question side*/
  }

  return (
    <div className="App">
      <h1> Fauna Collective </h1>
      <h3> The noun for a group of animals changes depending on the species! How many do you know?</h3>
      <h3> Number of cards: 6 </h3>
      <div className = 'card-content'>
      <Flashcard question = {flashcardData[currentIndex].question} answer={flashcardData[currentIndex].answer} flipped = {flipped} setFlip = {setFlip}/>
      </div>
      <button className = "nextBtn" onClick = {goNext}> → </button>
    </div>
  )
}

export default App