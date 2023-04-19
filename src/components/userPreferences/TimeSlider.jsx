import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { Container } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import axios from 'axios';

function valuetext(value) {
  return `${value} minutes`;
}

export default function DiscreteSlider({ onCookingTimeChange }) {
  const [cookingTime, setCookingTime] = useState(0);

  const handleSliderChange = async (event, newValue) => {
    setCookingTime(newValue);
    onCookingTimeChange(newValue);

    try {
      const response = await axios.post('/api/recipe', {
        params: { cookingTime: setCookingTime },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };

  return (
    <div>
      <main>
        <Container sx={{ width: 600 }}>
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
          />
          <FormHelperText>Required *</FormHelperText>
        </Container>
      </main>
    </div>
  );
}
