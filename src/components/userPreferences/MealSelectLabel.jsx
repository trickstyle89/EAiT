import React from "react";
import Select from "@mui/material/Select";
import { usePreferences } from "./PreferencesContext";
import { Box, Typography, MenuItem, FormControl } from "@mui/material";

export default function MealSelectLabel() {
  const { preferences, handleChangePreferences } = usePreferences();

  const handleSelectChange = (event) => {
    const selectedMealType = event.target.value;
    handleChangePreferences("mealType", selectedMealType);
    console.log(selectedMealType);
  };

  return (
    <div>
      <Box sx={{}}>
        <Typography variant="h6" mb={1}>
          1. Select meal type
        </Typography>
        <FormControl sx={{ minWidth: 360 }}>
          <Select
            value={preferences.mealType}
            onChange={handleSelectChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" disabled>
              <em>Select</em>
            </MenuItem>
            <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
            <MenuItem value={"Lunch"}>Lunch</MenuItem>
            <MenuItem value={"Dinner"}>Dinner</MenuItem>
            <MenuItem value={"Dessert"}>Dessert</MenuItem>
            <MenuItem value={"Snack"}>Snack</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
