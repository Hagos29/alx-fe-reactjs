import create from "zustand";

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
}));

export default useRecipeStore;
