import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { LoadingPage } from "./LoadingMUI";
import { Box, Paper } from "@mui/material";
import ImgMediaCard from "../CardsMuiRefactored";
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

  // const handlePrint = () => {
  //   window.print();
  // };

  if (isLoading) {
    return <LoadingPage />;
  }

  const nextRecipe = recipes[(currentRecipeIndex + 1) % recipes.length];

  return (
    <>
      <Box className="homepage">
        <Box className="bg-background">
          <Paper
            sx={{
              backgroundColor: "#fbfcf9",
              m: 12,
              mt: 8,
              mb: 8,
              borderRadius: 2,
              boxShadow: 12,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
              {recipes.map((recipe, index) => {
                if (index === currentRecipeIndex) {
                  return (
                    <>
                      <Box sx={{ width: "100%", display: "flex" }}>
                        <Box sx={{ width: "100%" }}>
                          <ImgMediaCard recipe={recipe} />
                        </Box>
                        <Box
                          onClick={toggleRecipes}
                          sx={{
                            pr: 4,
                            ml: 4,
                          }}
                        >
                          <SecondRecipeCard recipe={nextRecipe} />
                        </Box>
                      </Box>
                      <RecipeCard
                        key={index}
                        recipe={recipe}
                        showInstructions={showInstructions}
                        toggleInstructions={toggleInstructions}
                      />
                    </>
                  );
                }
                return null;
              })}
            </Box>
          </Paper>
        </Box >
      </Box >
    </>
  );
}

export default Recipe;

// style={{
//   position: "absolute",
//   top: "48%",
//   left: "80%",
//   transform: "translate(-50%, -50%)",
// }}
