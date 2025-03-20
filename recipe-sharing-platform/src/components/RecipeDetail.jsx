import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recipeData = data.recipes.find((item) => item.id === parseInt(id));
    setRecipe(recipeData);
    setLoading(false);
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-72 object-cover rounded-md mb-6"
      />
      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-6 pl-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-lg">{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Cooking Instructions</h2>
      <ol className="list-decimal list-inside pl-4 space-y-2">
        {recipe.instructions.map((step, index) => (
          <li key={index} className="text-lg">{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
