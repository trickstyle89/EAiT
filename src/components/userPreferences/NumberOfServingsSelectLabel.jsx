import React from "react";
import { usePreferences } from "./PreferencesContext";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";

function NumberOfServingsSelectLabel() {
  const { preferences, handleChangePreferences } = usePreferences();
  const { numberOfServings } = preferences;

  const handleSelectChange = (event) => {
    handleChangePreferences("numberOfServings", event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <Typography variant="h6" mb={1}>
        3. Select serving amount
      </Typography>
      <FormControl sx={{ minWidth: 360 }}>
        <Select
          value={numberOfServings}
          onChange={handleSelectChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            <em>Select</em>
          </MenuItem>
          <MenuItem value={"1-2"}>1-2 Servings</MenuItem>
          <MenuItem value={"3-4"}>3-4 Servings</MenuItem>
          <MenuItem value={"5-6"}>5-6 Servings</MenuItem>
          <MenuItem value={"7-8"}>7-8 Servings</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default NumberOfServingsSelectLabel;
