import './App.css';
import Flashcard from './components/Flashcard';

const App = () => {
  const flashcardData = [
    {id: 1, question: 'What is a group of lions called?', answer: 'A pride'},
    {id: 2, question: 'What is a group of fish called?', answer: 'A school'},
    {id: 3, question: 'What is a group of crows called?', answer: 'A murder'},
    {id: 4, question: 'What is a group of flamingos called?', answer: 'A flamboyance'},
    {id: 5, question: 'What is a group of ants called?', answer: 'A colony'} 
  ];

  //arrow buttons
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goPrev = () => {
    setCurrentIndex(currentIndex === 0 ? flashcardData.length - 1 : currentIndex - 1 );
  } 

  const goNext = () => {
    setCurrentIndex(currentIndex === flashcardData.length - 1 ?  0 : currentIndex + 1 );
  }

  return (
    <div className="App">
      <h1> Fauna Collective </h1>
      <h3> The noun for a group of animal changes depending on the animal! How many do you know?</h3>
      
      <div className="card-container">
        <Flashcard question = {flashcardData[currentIndex].question} answer={flashcardData[currentIndex].answer} />
      </div>
      <div className = "arrows">
        <span>
            <button onClick = {goPrev}> ← </button>
            <button onClick = {goNext}> → </button>
        </span>
        </div>
    </div>
  )
}

export default App