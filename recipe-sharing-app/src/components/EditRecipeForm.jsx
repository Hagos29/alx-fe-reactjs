import React, { useState } from "react";
import { useRecipeStore } from "./recipeStore"; // Ensure correct import

const EditRecipeForm = ({ recipe, onClose }) => {
  const { updateRecipe } = useRecipeStore(); // Get update function
  const [editedRecipe, setEditedRecipe] = useState({ ...recipe });

  const handleChange = (e) => {
    setEditedRecipe({ ...editedRecipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    event.preventDefault(); // Prevent page reload
    updateRecipe(editedRecipe);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Recipe Name:
        <input type="text" name="name" value={editedRecipe.name} onChange={handleChange} required />
      </label>

      <label>
        Ingredients:
        <textarea name="ingredients" value={editedRecipe.ingredients} onChange={handleChange} required />
      </label>

      <button type="submit">Save Changes</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;
