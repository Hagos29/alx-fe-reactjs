import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Import React Router components
import RecipeList from "./components/RecipeList";
import EditRecipeForm from "./components/EditRecipeForm";
import NotFound from "./components/NotFound"; // Optional: Handle 404 pages

const App = () => {
  return (
    <Router> {/* ✅ Wrap the app in Router */}
      <Routes>
        <Route path="/" element={<RecipeList />} /> {/* ✅ Home page */}
        <Route path="/edit/:id" element={<EditRecipeForm />} /> {/* ✅ Edit Recipe */}
        <Route path="*" element={<NotFound />} /> {/* ✅ Handle unknown routes */}
      </Routes>
    </Router>
  );
};

export default App;
