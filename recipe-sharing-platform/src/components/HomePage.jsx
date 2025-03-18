import React, { useState, useEffect } from 'react';
import jsonData from'../data.json'

const HomePage = () => {
    const[recipes, setRecipes] = useState([]);
    
    useEffect(() => {
      fetch("/data.json")
      .then(response => response.json())
      .then(data => setRecipes(data));
    }, []

    );

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <li key={recipe.id}>
              <h2>{recipe.title}</h2>
              <p>{recipe.summary}</p>
              <img src={recipe.image} alt={recipe.title} width="200" />
            </li>
          ))
        ) : (
          <p>Loading recipes...</p>
        )}
      </ul>
    </div>
  );
  
};

export default HomePage