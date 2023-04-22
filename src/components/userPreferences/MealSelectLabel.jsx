import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { usePreferences } from "./PreferencesContext";

function MealSelectLabel() {
  const { preferences, handleChangePreferences } = usePreferences();

  const handleSelectChange = (event) => {
    const selectedMealType = event.target.value;
    handleChangePreferences("mealType", selectedMealType);
    console.log(selectedMealType);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 400 }}>
        <h3>1. Select Meal</h3>
        <Select
          value={preferences.mealType}
          onChange={handleSelectChange}
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

export default MealSelectLabel;
