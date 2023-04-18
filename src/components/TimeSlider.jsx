import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

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
        <br></br>
        <br></br>
        <Box sx={{ width: 300 }}>
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
        </Box>
      </main>
    </div>
  );
}
