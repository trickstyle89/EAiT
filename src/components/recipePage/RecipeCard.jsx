import React from "react";
import VerticalLinearStepper from "../VerticalStepper";
import ControlledSwitches from "../IngredientsSwitchMui";
import ImgMediaCard from "../CardsMui";
import CheckboxLabels from "../CheckboxMui";
import { Box, Paper, Typography } from "@mui/material";

function RecipeCard({ recipe, showInstructions, toggleInstructions }) {
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
            }}
          >
            <ImgMediaCard recipe={recipe} />
            <Paper
              variant="outlined"
              sx={{
                m: 4,
              }}
            >
              <Box
                sx={{
                  m: 2,
                }}
              >
                <Typography variant="h5">Ingredients</Typography>
                <CheckboxLabels recipe={recipe} />
              </Box>
            </Paper>

            <Paper
              variant="outlined"
              sx={{
                m: 4,
                backgroundColor: "blue",
              }}
            >
              <Box sx={{ m: 2, mb: 5, backgroundColor: "red" }}>
                <Typography variant="h5">Instructions</Typography>
                <ControlledSwitches
                  checked={showInstructions}
                  onChange={toggleInstructions}
                  label="Follow along"
                />
                {showInstructions ? (
                  <VerticalLinearStepper recipe={recipe} />
                ) : (
                  recipe.instructions.map((instruction, index) => (
                    <p key={index}>{instruction}</p>
                  ))
                )}
              </Box>
            </Paper>
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default RecipeCard;
