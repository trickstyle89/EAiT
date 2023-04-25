import * as React from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

export default function CheckboxLabels({ recipe }) {
  const itemComponents = recipe.ingredients.map((ingredient, index) => (
    <FormControlLabel
      key={index}
      control={<Checkbox />}
      label={ingredient}
    ></FormControlLabel>
  ));
  return (
    <FormGroup>
      {itemComponents}
      {/* <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
    </FormGroup>
  );
}
