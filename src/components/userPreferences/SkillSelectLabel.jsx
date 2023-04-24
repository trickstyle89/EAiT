import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import { usePreferences } from "./PreferencesContext";

function SkillSelectLabel() {
  const { preferences, handleChangePreferences } = usePreferences();

  const handleSelectChange = (event) => {
    const selectedSkillLevel = event.target.value;
    handleChangePreferences("skillLevel", selectedSkillLevel);
    console.log(selectedSkillLevel);
  };

  return (
    <div>
      <Typography variant="h6" mb={1}>
        2. What is your cooking skill level?
      </Typography>
      <FormControl sx={{ minWidth: 360 }}>
        <Select
          value={preferences.skillLevel}
          onChange={handleSelectChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            <em>Select</em>
          </MenuItem>
          <MenuItem value={"Beginner"}>Beginner</MenuItem>
          <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
          <MenuItem value={"Advanced"}>Advanced</MenuItem>
        </Select>
        <FormHelperText>Required *</FormHelperText>
      </FormControl>
    </div>
  );
}

export default SkillSelectLabel;
