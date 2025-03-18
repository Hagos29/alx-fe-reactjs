import React, { useState, useEffect } from "react"; 
import jsonData from "../data.json";

const Card = ({ title, summary, image }) => {
  return (
    <div className="bg-gray rounded-2xl shadow-lg overflow-hidden w-80 border border-gray-200 p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-2xl" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2">{summary}</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Recipe List</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {recipes.length > 0 ? (
          recipes.map((recipe) => <Card key={recipe.id} {...recipe} />)
        ) : (
          <p>Loading recipes...</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
