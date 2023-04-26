import React from "react";
import VerticalLinearStepper from "../VerticalStepper";
import ControlledSwitches from "../IngredientsSwitchMui";
import CheckboxLabels from "../CheckboxMui";
import { Box, Paper, Typography } from "@mui/material";

function RecipeCard({ recipe, showInstructions, toggleInstructions }) {
  return (
    <>
      <Box sx={{ width: "100%", display: "flex" }}>
        <Paper
          variant="outlined"
          sx={{
            mt: 6,
            mr: 2,
            mb: 6,
            ml: 4,
            width: "30%"
          }}
        >
          <Box
            sx={{
              m: 2,
              ml: 4,
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 1,
              }}
              variant="h5"
            >
              Ingredients{" "}
            </Typography>
            <CheckboxLabels recipe={recipe} />
          </Box>
        </Paper>
        <Paper
          variant="outlined"
          sx={{
            mt: 6,
            mr: 4,
            mb: 6,
            ml: 2,
            width: "65%"
          }}
        >
          <Box sx={{ m: 2, mb: 5 }}>
            <Typography
              variant="h5"
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 1,
              }}
            >
              Instructions
            </Typography>
            <ControlledSwitches
              checked={showInstructions}
              onChange={toggleInstructions}
              label="Follow along"
            />
            {showInstructions ? (
              <VerticalLinearStepper recipe={recipe} />
            ) : (
              recipe.instructions.map((instruction, index) => (
                <Typography
                  sx={{
                    m: 1,
                    ml: 2,
                    mb: 2.5
                  }}
                  key={index}
                >
                  {instruction}
                </Typography>
              ))
            )}
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default RecipeCard;
