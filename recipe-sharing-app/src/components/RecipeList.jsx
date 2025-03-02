import React, { useEffect } from "react";
import useRecipeStore from "./recipeStore"; // Import Zustand store

const RecipeList = () => {
  const { filteredRecipes, searchTerm, filterRecipes } = useRecipeStore();

  // Trigger filtering whenever searchTerm changes
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recipe List</h2>
      {filteredRecipes.length > 0 ? (
        <ul>
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id} className="p-2 border-b">
              {recipe.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
