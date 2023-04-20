import React from "react";
import { usePreferences } from "./PreferencesContext";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Container } from "@mui/material";

function MeasurementSelectLabel() {
  const { preferences, handleChange } = usePreferences();
  const { measurementSelection } = preferences;

  const handleSelectChange = (event) => {
    handleChange("measurementSelection", event.target.value);
  };

  return (
    <Container>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
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
    </Container>
  );
}

export default MeasurementSelectLabel;
