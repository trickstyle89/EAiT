import React from "react";
import CheckboxLabels from "../CheckboxMui";
import { Box, Typography } from "@mui/material";

function RecipeIngredients({ recipe }) {
  return (
    <Box>
      <Typography> Ingredients </Typography>
      <CheckboxLabels recipe={recipe} />
    </Box>
  );
}

export default RecipeIngredients;
