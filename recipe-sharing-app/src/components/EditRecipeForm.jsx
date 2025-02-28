import React, { useState } from "react";
import { useRecipeStore } from "../store/recipeStore"; // Import Zustand store

const EditRecipeForm = ({ recipe, onClose }) => {
  const { updateRecipe } = useRecipeStore(); // Get update function from the store

  // Local state to store form inputs
  const [editedRecipe, setEditedRecipe] = useState({ ...recipe });

  // Handle input changes
  const handleChange = (e) => {
    setEditedRecipe({ ...editedRecipe, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form reload behavior
    updateRecipe(editedRecipe); // Update recipe in Zustand store
    onClose(); // Close the form after saving
  };

  return (
    <form onSubmit={handleSubmit} className="edit-recipe-form">
      <label>
        Recipe Name:
        <input
          type="text"
          name="name"
          value={editedRecipe.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Ingredients:
        <textarea
          name="ingredients"
          value={editedRecipe.ingredients}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Instructions:
        <textarea
          name="instructions"
          value={editedRecipe.instructions}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Save Changes</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;
