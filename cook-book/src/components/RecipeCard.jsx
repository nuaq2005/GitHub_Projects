import React, { useEffect, useState } from "react";

function RecipeCard({ id, title, image }) {
    return (
      <div className='recipe-card' key ='id'>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </div>
    );
  }
  

export default RecipeCard;
