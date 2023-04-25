import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { LoadingPage } from "./LoadingMUI";
import { Typography, Box } from "@mui/material";
import CheckboxLabels from "../CheckboxMui";
import ControlledSwitches from "../IngredientsSwitchMui";
import VerticalLinearStepper from "../IngredientsSwitchMui";

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

      <div
        onClick={toggleRecipes}
        style={{
          position: "absolute",
          top: "48%",
          left: "80%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div>
          {/* <Typography variant="h5">You may also like:</Typography>
      <br></br>
      <Typography variant="body1">{nextRecipe.name}</Typography> */}
          <Typography variant="body1">You May Also Like:</Typography>
          <Box>
            <img
              src={nextRecipe.image}
              alt={nextRecipe.name}
              width="200"
              height="200"
            />
          </Box>

          <Typography variant="subtitle2">{nextRecipe.name}</Typography>

          {/* <p>Click here</p> */}
        </div>
      </div>
    </>
  );
}

export default Recipe;

// else if (index === currentRecipeIndex + 1) {
//   return (
//     <>
//       <RecipeCard
//         key={index}
//         recipe={recipe}
//         showInstructions={showInstructions}
//         toggleInstructions={toggleInstructions}
//       />

//   );
// }
