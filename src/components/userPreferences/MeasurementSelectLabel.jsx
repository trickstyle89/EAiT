import React from "react";
import { usePreferences } from "./PreferencesContext";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";

function MeasurementSelectLabel() {
  const { preferences, handleChangePreferences } = usePreferences();
  const { measurementSelection } = preferences;

  const handleSelectChange = (event) => {
    handleChangePreferences("measurementSelection", event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <Typography variant="h6" mb={1}>
        3. Select a measurement option
      </Typography>
      <FormControl sx={{ minWidth: 360 }}>
        <Select
          value={measurementSelection}
          onChange={handleSelectChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value={"Imperial"}>Imperial</MenuItem>
          <MenuItem value={"Metric"}>Metric</MenuItem>
        </Select>
        <FormHelperText>Required *</FormHelperText>
      </FormControl>
    </div>
  );
}

export default MeasurementSelectLabel;
