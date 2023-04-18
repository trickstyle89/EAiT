import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { Container } from "@mui/material";

function valuetext(value) {
  return `${value} minutes`;
}

export default function DiscreteSlider() {
  const [value, setValue] = useState();

  function handleSliderChange(newValue) {
    setValue(newValue);
  }
  return (
    <div>
      <main>
        <Container sx={{ width: 600 }}>
          <Slider
            getAriaValueText={valuetext}
            valueLabelDisplay="on"
            step={5}
            min={0}
            max={120}
            onChange={handleSliderChange}
            valueLabelFormat={valuetext}
            marks={true}
          />
        </Container>
      </main>
    </div>
  );
}
