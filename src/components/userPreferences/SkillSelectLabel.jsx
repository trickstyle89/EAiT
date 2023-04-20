import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Container } from "@mui/material";
import { usePreferences } from "./PreferencesContext";

function SkillSelectLabel() {
  const { preferences, handleChange } = usePreferences();

  const handleSelectChange = (event) => {
    const selectedSkillLevel = event.target.value;
    handleChange("skillLevel", selectedSkillLevel);
  };

  return (
    <Container>
      <FormControl sx={{ minWidth: 400 }}>
        <Select
          value={preferences.skillLevel}
          onChange={handleSelectChange}
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
