import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { LoadingPage } from "./LoadingMUI";

function Recipe() {
  const [showInstructions, setShowInstructions] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipe] = useState([]);
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/api/recipe")
      .then((response) => response.json())
      .then((fetchedRecipes) => {
        setRecipe(fetchedRecipes);
        setIsLoading(false);
      });
  }, []);

  const toggleInstructions = () => {
    setShowInstructions((prevState) => !prevState);
  };

  const toggleRecipes = () => {
    setCurrentRecipeIndex((prevIndex) => (prevIndex + 1) % recipes.length);
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  const nextRecipe = recipes[(currentRecipeIndex + 1) % recipes.length];

  return (
    <div className="recipe">
      <main className="recipe-main">
        {recipes.map((recipe, index) => {
          if (index === currentRecipeIndex) {
            return (
              <RecipeCard
                key={index}
                recipe={recipe}
                showInstructions={showInstructions}
                toggleInstructions={toggleInstructions}
              />
            );
          }
          return null;
        })}
        <div
          className="recipe-toggle-btn"
          onClick={toggleRecipes}
          style={{
            position: "absolute",
            top: "35%",
            left: "70%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div>
            <h2>{nextRecipe.name}</h2>
            <img
              src={nextRecipe.image}
              alt={nextRecipe.name}
              width="300"
              height="150"
            />
            <p>Click to view this alternative recipe</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Recipe;
