import './App.css';
import React, { useState } from 'react';
import Flashcard from './components/Flashcard';
import Answerform from './components/Answerform';

const App = () => {
  const [flashcardData, setFlashcardData] = useState( [
    {id: 0, question: 'Begin!', answer: 'Click to reveal answer'},
    {id: 1, question: 'What is a group of lions called?', answer: 'A pride'},
    {id: 2, question: 'What is a group of fish called?', answer: 'A school'},
    {id: 3, question: 'What is a group of crows called?', answer: 'A murder'},
    {id: 4, question: 'What is a group of flamingos called?', answer: 'A flamboyance'},
    {id: 5, question: 'What is a group of ants called?', answer: 'A colony'},
    {id: 6, question: 'What is a group of owls called?', answer: 'A parliament'}
  ]);

  //arrow button and flashcard flip state
  const [flipped, setFlip] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [streak,setStreak] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);

  const goPrev = () => {
    setCurrentIndex(currentIndex === 0? 0 : currentIndex - 1);
    setFlip (false);
  }

  const goNext = () => {
    setCurrentIndex(currentIndex === flashcardData.length - 1?  flashcardData.length - 1: currentIndex + 1);
    setFlip (false); /* sets to false for each new card to keep on question side*/
  }

  const shuffle = () =>{
    const newFlashcardData = [...flashcardData];
    /* for loop will swap up remaining question index*/
    for (let i = currentIndex + 1; i < newFlashcardData.length; i++) {
      let randomIndex = Math.floor(Math.random() * (newFlashcardData.length - (currentIndex + 1))) + (currentIndex + 1);
      [newFlashcardData[i], newFlashcardData[randomIndex]] = [newFlashcardData[randomIndex], newFlashcardData[i]];
    }

    setFlashcardData(newFlashcardData);
    setFlip (false);
  }


  return (
    <div className="App">
      <h1 className='title'> Fauna Collective </h1>
      <h3 className='info'> The noun for a group of animals changes depending on the species! How many do you know?</h3>
      <h3 className='info'> Number of cards: 6 </h3>
      <span> Current streak: {streak} </span>
      <span> Highest streak: {highestStreak} </span>
      
      <div className = 'card-content'>
      <Flashcard question = {flashcardData[currentIndex].question} answer={flashcardData[currentIndex].answer} flipped = {flipped} setFlip = {setFlip}/>
      </div>
      <Answerform flashcardData={flashcardData} currentIndex={currentIndex} streak ={streak} setStreak = {setStreak} highestStreak = {streak} setHighestStreak = {setHighestStreak}/>
      <button className = "prevBtn button" onClick = {goPrev}> ←  </button>
      <button className = "nextBtn button" onClick = {goNext}> → </button>
      <button className = "randomBtn button" onClick = {shuffle}> Shuffle </button>
    </div>
  )
}

export default App