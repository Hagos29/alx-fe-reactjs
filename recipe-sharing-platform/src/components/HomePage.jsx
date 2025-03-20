import React, { useState, useEffect } from "react";

const Card = ({ name, description, image }) => {
  return (
    <div className="bg-white hover:shadow-xl rounded-2xl shadow-md overflow-hidden w-80 border border-gray-200 p-4 transition-transform duration-300 hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-2xl" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        return setRecipes(data.recipes)
      }) // ✅ Access the correct key
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {recipes.length > 0 ? (
          recipes.map((recipe) => <Card key={recipe.id} {...recipe} />)
        ) : (
          <p className="text-gray-600 text-center">Loading recipes...</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
