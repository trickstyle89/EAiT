import React from "react";
import CheckboxLabels from "../CheckboxMui";
import { Box, Typography } from "@mui/material";

function RecipeIngredients({ recipe }) {
  return (
    <Box>
      <CheckboxLabels recipe={recipe} />
    </Box>
  );
}

export default RecipeIngredients;
