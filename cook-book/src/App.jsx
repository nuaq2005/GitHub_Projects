import { useEffect, useState } from 'react';
import './App.css'
import RecipeCard from './components/RecipeCard';
import RecipeForm from './components/RecipeForm';
import RecipeChart from './components/RecipeChart';

function App() {
  const [meals, setMeals] = useState([]);

  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);

  const [category, setCategory] = useState('');
  const [area, setArea] = useState('');

  const [mostUsedIngredient, setMostUsedIngredient] = useState('');
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

   // Fetch all categories
   useEffect(() => {
    const fetchCategories = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    const data = await response.json();
    setCategories(data.categories);
  };fetchCategories().catch(console.error);
}, []);

  // Fetch all areas
  useEffect(() => {
  const fetchAreas = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    const data = await response.json();
    setAreas(data.meals);
  };fetchAreas().catch(console.error);
}, []);

  // Fetch meals by category and area
  const fetchMeals = async () => {
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?`;
    if (category) {
      url += `c=${category}`;
    }
    if (area) {
      url += `a=${area}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    setMeals(data.meals);
  };

  const findMostUsedIngredient = async () => {
    const ingredientCount = {};
    // Loop through each meal and count ingredients
    for (const meal of meals) {
      const mealResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
      const mealData = await mealResponse.json();
      const ingredients = mealData.meals[0];
  
      // Count ingredients for the meal
      for (let i = 1; i <= 20; i++) {
        const ingredient = ingredients[`strIngredient${i}`]; // Get ingredient
        if (ingredient) { // If ingredient exists
          ingredientCount[ingredient] = (ingredientCount[ingredient] || 0) + 1; // Increment count
        }
      }
    }

    const sortedIngredients = Object.entries(ingredientCount) // Convert to array
      .sort(([, countA], [, countB]) => countB - countA); // Sort by count
    setMostUsedIngredient(sortedIngredients[0][0]); // Set most used ingredient to the first item
  };

//this runs the fetchMeals function when the category or area changes
  useEffect(() => {
    if (category || area) {
      fetchMeals();
    }
  }, [category, area]);

  //this runs the fetchIngredients function when the meals change
  useEffect(() => {
    findMostUsedIngredient();
  }, [meals]);

  // Filter meals by name
  const filterByName = (inputStr) =>{
    const query = inputStr.toLowerCase();
    setSearchQuery(query);

    if(query !== ''){
      const filtered = meals.filter((meal) => 
        meal.strMeal.toLowerCase().includes(query)
      );
      setFilteredMeals(filtered);
    }else{
      setFilteredMeals(meals);
    }
  };


  return (
    <div className='whole-page'>
      <h1>Cook Book</h1>
      <h2>Explore An Array of Meals!</h2>

      {/* Summary Section */}
      <div className='summary'>
        <h3>Summary</h3>
        <p>Total Meals: 303 </p>
        <p>Meals Filtered By {area ? area : category}: {meals.length||0} </p>
        <p>Top Meal Ingredient: {mostUsedIngredient} </p>
      </div>

      {/* Line Chart */}
      <RecipeChart  meals={meals} />

      <input 
      type="text" 
      placeholder="Search for a meal" 
      onChange={(inputStr) => filterByName(inputStr.target.value)} 
      />

      {/* Filters */}
      <RecipeForm
        categories={categories}
        areas={areas}
        setCategory={setCategory}
        setArea={setArea}
        category={category}
        area={area}
      />

      {/* Meals Display */}
      <div className='recipes'>
        
        {searchQuery && filteredMeals.length > 0 ? (
          filteredMeals.map((meal) => (
            <RecipeCard
              key={meal.idMeal}
              id={meal.idMeal}
              title={meal.strMeal}
              image={meal.strMealThumb}
            />
           ))
          ) : ( 
            meals.map((meal) => (
              <RecipeCard
                key={meal.idMeal}
                id={meal.idMeal}
                title={meal.strMeal}
                image={meal.strMealThumb}
              />
            )))
          }

      </div>
    </div>
  );
}

export default App;