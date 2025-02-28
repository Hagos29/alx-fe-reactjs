import React from "react";
import { useRecipeStore } from "../store/recipeStore"; // Import Zustand store

const DeleteRecipeButton = ({ recipeId }) => {
  const { deleteRecipe } = useRecipeStore(); // Get delete function from the store

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId); // Delete the recipe from Zustand store
    }
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
