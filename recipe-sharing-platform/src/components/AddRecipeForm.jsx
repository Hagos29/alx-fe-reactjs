import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError("All fields are required.");
      return;
    }
    const ingredientList = ingredients.split(",").map((item) => item.trim());
    if (ingredientList.length < 2) {
      setError("Please provide at least two ingredients.");
      return;
    }
    setError("");
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredientList,
      steps: steps.split(". ").map((step) => step.trim()),
    };
    onAddRecipe(newRecipe);
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Recipe Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Ingredients (comma-separated)</label>
          <textarea
            className="w-full p-2 border rounded-md"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Preparation Steps (separate steps with a period)</label>
          <textarea
            className="w-full p-2 border rounded-md"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;