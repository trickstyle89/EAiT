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
                toggleRecipes={toggleRecipes}
              />
            );
          } else {
            return (
              <div key={index} className="recipe-link" onClick={toggleRecipes}>
                <h2>{recipe.name}</h2>
                <p>Click to view recipe</p>
              </div>
            );
          }
        })}
      </main>
    </div>
  );
}

export default Recipe;