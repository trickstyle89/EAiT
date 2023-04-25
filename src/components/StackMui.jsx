import * as React from "react";
import { Box, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "grey",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#fff",
}));

export default function BasicStack({ recipe }) {
  const itemComponents = recipe.ingredients.map((ingredient, index) => (
    <Item key={index}>{ingredient}</Item>
  ));

  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={1}>{itemComponents}</Stack>
    </Box>
  );
}
