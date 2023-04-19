import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from 'axios';

export default function MealSelectLabel() {
  const [mealType, setMealType] = useState("");

  const handleChange = async (event) => {
    const selectedMealType = event.target.value;
    setMealType(selectedMealType);
    
    try {
      const response = await axios.post('/api/recipe', {
        mealType: selectedMealType,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <Select
          value={mealType}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
          <MenuItem value={"Lunch"}>Lunch</MenuItem>
          <MenuItem value={"Dinner"}>Dinner</MenuItem>
          <MenuItem value={"Dessert"}>Dessert</MenuItem>
          <MenuItem value={"Snack"}>Snack</MenuItem>
        </Select>
        <FormHelperText>Required *</FormHelperText>
      </FormControl>
    </div>
  );
}
