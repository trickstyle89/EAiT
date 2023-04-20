import React from "react";
import { usePreferences } from "./PreferencesContext";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function MeasurementSelectLabel() {
  const { preferences, handleChangePreferences } = usePreferences();
  const { measurementSelection } = preferences;

  const handleSelectChange = (event) => {
    handleChangePreferences("measurementSelection", event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 400 }}>
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
