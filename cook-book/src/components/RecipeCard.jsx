import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function RecipeCard({ id, title, image }) {
    return (
      <div className='recipe-card' key ='id'>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <Link to={`/RecipeDetails/${id}`}>View Recipe</Link>
      </div>
    );
  }
  

export default RecipeCard;
