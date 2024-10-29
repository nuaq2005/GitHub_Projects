import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./SideBar";

function RecipeInfo() {
    let params = useParams();
    const [fullDetails, setFullDetails] = useState(null);
    
    useEffect(() => {
        const getRecipeDetail = async () => {
        const details = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
        );

        const detailsJson = await details.json();
        setFullDetails(detailsJson.meals[0]);
        };
        getRecipeDetail().catch(console.error);
    }, [params.id]);
    
    if (!fullDetails) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="recipe-info">
        <h2>{fullDetails.strMeal}</h2>
        <img src={fullDetails.strMealThumb} alt={fullDetails.strMeal} />
        <h3>Instructions</h3>
        <p>{fullDetails.strInstructions}</p>
        <h3>Ingredients</h3>
        <ul>
            {Object.entries(fullDetails)
            .filter(([key, value]) => key.startsWith("strIngredient") && value)
            .map(([key, value]) => (
                <li className = 'ingredientList' key={key}>{value}</li>
            ))}
        </ul>
        </div>
    );
}

export default RecipeInfo;