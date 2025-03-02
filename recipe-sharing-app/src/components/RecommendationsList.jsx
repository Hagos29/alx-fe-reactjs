import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  const { recommendedRecipes } = useRecipeStore();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recommended for You</h2>
      {recommendedRecipes.length > 0 ? (
        <ul>
          {recommendedRecipes.map((recipe) => (
            <li key={recipe.id} className="p-2 border-b">
              <Link to={`/recipes/${recipe.id}`} className="text-blue-500 hover:underline">
                {recipe.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available. Add some favorites to get suggestions!</p>
      )}
    </div>
  );
};

export default RecommendationsList;
