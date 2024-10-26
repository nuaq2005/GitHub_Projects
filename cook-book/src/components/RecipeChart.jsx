import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";

const RecipeChart = ({ meals }) => {
    const [ingredientsData, setIngredientsData] = useState([]);

    useEffect(() => {
        const ingredientCount = {};
        const fetchIngredientCount = async () => {
        for (const meal of meals) {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
            const data = await response.json();

            const ingredients = data.meals[0];
            for (let i = 1; i <= 20; i++) {
                const ingredient = ingredients[`strIngredient${i}`];
                if (ingredient) {
                    ingredientCount[ingredient] = (ingredientCount[ingredient] || 0) + 1;
                }
            }
        }
        const data = Object.keys(ingredientCount).map((ingredient) => ({
            name: ingredient,
            count: ingredientCount[ingredient],
        }));
        setIngredientsData(data);
    }; fetchIngredientCount().catch(console.error);
    }, [meals]);

    return (
        <div className="ingredient-chart">
          {ingredientsData ? (
            <div>
              <br></br>
                <h2>All Ingredients</h2>
                <ResponsiveContainer  width={730} height={250}>
                <LineChart 
                data={ingredientsData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="count" stroke="#648AA3" />
                  </LineChart>
                </ResponsiveContainer>
            </div>
          ) : null}
        </div>
    );
};

export default RecipeChart;
