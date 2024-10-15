import { useState, useEffect } from 'react'
import './App.css'

function App() {
const API_URL = 'https://api.thedogapi.com/v1/images/search?limit=50&api_key=live_IBeVXUGlSq9n4CGGJ3bhPMuXbp0HYb2kWMI1eA8RKzLiaSskLiNhZJeb0QDqq9XM';
const [dogList, setDogList] = useState([]);
const [currentDog, setCurrentDog] = useState(null);
const [banList, setBanList] = useState([]);

useEffect(() => {
  const fetchDogs = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setDogList(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchDogs();
}, []);

  

  const newDog = () => {
    if (dogList.length === 0) return;

    const filteredDogList = dogList.filter((dog) => {
      const breed = dog.breeds?.[0];
      if (!breed) return true;

      return !banList.includes(breed.weight.metric) &&
        !banList.includes(breed.height.metric) &&
        !banList.includes(breed.life_span);
    });

    if (filteredDogList.length === 0) {
      alert('No more dogs match the criteria');
      return;
    }

    const randomIndex = Math.floor(Math.random() * filteredDogList.length);
    setCurrentDog(filteredDogList[randomIndex]);
  };

  const addtoBan = (tag) => {
    if (!tag) return;
    setBanList([...banList, tag]);
  }


  return (
    <div className='whole-page'> 
      <h1> Dogs Galore </h1>
      <h3> Discover new Dog Breeds </h3>
        <div className='dog-content'> 
        <div className='dog-image'>
        {currentDog && (
          <img src={currentDog.url} alt='dog' height={200} />
        )}
        </div>
        <div className='dog-info'>
          {currentDog && currentDog.breeds?.length > 0 && (
            <div>
              <h2>{currentDog.breeds[0].name}</h2>
              <button onClick = {() => addtoBan (currentDog.breeds[0].weight.metric)}>
                {currentDog.breeds[0].weight.metric} kg </button>
              <button onClick = {() => addtoBan (currentDog.breeds[0].life_span)}>
                {currentDog.breeds[0].life_span}</button>
              <button onClick = {() => addtoBan(currentDog.breeds[0].height.metric)}>
                {currentDog.breeds[0].height.metric} cm </button>
            </div>
          )}
        </div>
      </div>

      <button onClick = {newDog}> 
         New Dog 🐶
      </button>

      <h2> Banned </h2>
      <div className='ban-tags'>
        {banList.map((tag, index) => (
          <button key={index}> {tag} </button>
        ))}
      </div>
    </div>
  )
}

export default App;
