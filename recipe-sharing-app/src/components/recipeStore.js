import { create } from 'zustand'; 
import { useRecipeStore } from '../components/recipeStore';



const recipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
}));
export default useRecipeStore;