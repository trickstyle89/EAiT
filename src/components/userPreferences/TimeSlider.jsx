import React from "react";
import Slider from "@mui/material/Slider";
import { Container } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";

function valuetext(value) {
  return `${value} minutes`;
}

export default function DiscreteSlider() {
  return (
    <div>
      <main>
        <Container sx={{ width: 600 }}>
          <Slider
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={5}
            min={0}
            max={120}
            valueLabelFormat={valuetext}
            marks={true}
          />
          <FormHelperText>Required *</FormHelperText>
        </Container>
      </main>
    </div>
  );
}
