import React from "react";
import { useRecipeStore } from "./recipeStore"; // Import Zustand store
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const DeleteRecipeButton = ({ recipeId }) => {
  const { deleteRecipe } = useRecipeStore(); // Get delete function from the store
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId); // Delete the recipe from Zustand store
      navigate("/"); // ✅ Redirect to home or another page after deletion
    }
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
