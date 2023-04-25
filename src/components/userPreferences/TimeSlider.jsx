import React from "react";
import { Typography, Slider } from "@mui/material";
import { usePreferences } from "./PreferencesContext";

function valuetext(value) {
  return `${value} minutes`;
}

export default function DiscreteSlider() {
  const { preferences, handleChangePreferences } = usePreferences();
  const { cookingTime } = preferences;

  const handleSliderChange = (event, newValue) => {
    handleChangePreferences("cookingTime", newValue);
    console.log(newValue);
  };

  return (
    <div>
      <Typography variant="h6">4. How much time do you have?</Typography>
      <Slider
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={5}
        min={10}
        max={180}
        value={cookingTime}
        valueLabelFormat={valuetext}
        marks={true}
        onChange={handleSliderChange}
        sx={{
          color: "secondary",
          marginTop: 3,
        }}
      />
    </div>
  );
}
