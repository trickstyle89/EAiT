import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels({ recipe }) {
  const itemComponents = recipe.ingredients.map((ingredient, index) => (
    <FormControlLabel key={index} control={<Checkbox defaultChecked />} label={ingredient}></FormControlLabel>
  ));
  return (
    <FormGroup>
      {itemComponents}
      {/* <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
    </FormGroup>
  );
}