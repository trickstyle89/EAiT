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
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ImgMediaCard recipe={recipe} />
            <Paper
              variant="outlined"
              sx={{
                m: 7,
                mt: 5,
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
                ml: 6.5,
                mr: 6.5,
                mb: 6,
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
                      }}
                      key={index}
                    >
                      {instruction}
                    </Typography>
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
