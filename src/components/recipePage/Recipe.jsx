import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { LoadingPage } from "./LoadingMUI";
import { Typography, Box } from "@mui/material";
import SecondRecipeCard from "./SecondRecipe";

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

  const handlePrint = () => {
    window.print();
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  const nextRecipe = recipes[(currentRecipeIndex + 1) % recipes.length];

  return (
    <>
      {recipes.map((recipe, index) => {
        if (index === currentRecipeIndex) {
          return (
            <>
              <RecipeCard
                key={index}
                recipe={recipe}
                showInstructions={showInstructions}
                toggleInstructions={toggleInstructions}
              />
              <button onClick={handlePrint}>Print</button>
            </>
          );
        }
        return null;
      })}
      <Box
        onClick={toggleRecipes}
        style={{
          position: "absolute",
          top: "48%",
          left: "80%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography variant="body1">You May Also Like:</Typography>
        <SecondRecipeCard recipe={nextRecipe} />
      </Box>
    </>
  );
}

export default Recipe;