import './App.css';
import Flashcard from './components/Flashcard';

const App = () => {

  return (
    <div className="App">
      <h1> Fauna Collective </h1>
      <h3> The noun for a group of animal changes depending on the animal! How many do you know?</h3>
      <div className="card-container">
        <Flashcard />
      </div>

    </div>
  )
}

export default App