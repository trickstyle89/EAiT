import React from "react";
import Slider from "@mui/material/Slider";
import { Container } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
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
      <main>
        <Container sx={{ width: 600, textAlign: "left", margin: 0 }}>
          <Slider
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={5}
            min={10}
            max={120}
            value={cookingTime}
            valueLabelFormat={valuetext}
            marks={true}
            onChange={handleSliderChange}
            sx={{
              color: "#373d20",
              marginTop: 3,
            }}
          />
          <FormHelperText>Required *</FormHelperText>
        </Container>
      </main>
    </div>
  );
}
