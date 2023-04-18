import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Container } from "@mui/material";

function SkillSelectLabel() {
  const [skillLevel, setSkillLevel] = useState("");

  const handleChange = (event) => {
    setSkillLevel(event.target.value);
  };

  return (
    <Container>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <Select
          value={skillLevel}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value={"Beginner"}>Beginner</MenuItem>
          <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
          <MenuItem value={"Advanced"}>Advanced</MenuItem>
          <MenuItem value={"Chef"}>Chef</MenuItem>
        </Select>
        <FormHelperText>Required *</FormHelperText>
      </FormControl>
    </Container>
  );
}

export default SkillSelectLabel;
