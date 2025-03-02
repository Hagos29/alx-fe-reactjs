import create from "zustand";
import favorites from './favorites';
import recommendations from "./recommendations";

const useRecipeStore = create((set, get) => ({
  recipes: [], // Full list of recipes
  filteredRecipes: [], // Filtered recipes
  searchTerm: "",

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // Trigger filtering when search term updates
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  setRecipes: (newRecipes) => {
    set({ recipes: newRecipes, filteredRecipes: newRecipes }); // Initialize both lists
  },
  
  
  addRecipe: (newRecipe) => {
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.filteredRecipes, newRecipe], // Keep filtered list updated
    }));
  },

  // ✅ Update an existing recipe
  updateRecipe: (updatedRecipe) => {
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );

      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    });
  },

  // ✅ Delete a recipe
  deleteRecipe: (recipeId) => {
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== recipeId);
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    });
  },

}));

export default useRecipeStore;
