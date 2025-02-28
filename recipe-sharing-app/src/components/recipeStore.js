import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  // Load recipes from localStorage or initialize with an empty array
  recipes: JSON.parse(localStorage.getItem('recipes')) || [],

  // Add a new recipe
  addRecipe: (recipe) => {
    set((state) => {
      const updatedRecipes = [...state.recipes, recipe];
      localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
      return { recipes: updatedRecipes };
    });
  },

  // Update an existing recipe
  updateRecipe: (updatedRecipe) => {
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
      return { recipes: updatedRecipes };
    });
  },

  // Delete a recipe by ID
  deleteRecipe: (id) => {
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
      return { recipes: updatedRecipes };
    });
  },
}));
export default useRecipeStore;