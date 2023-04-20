import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Container } from "@mui/material";

function MeasurementSelectLabel() {
  const [measurementSelection, setMeasurementSelection] = useState("");

  const handleChange = (event) => {
    setMeasurementSelection(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 400 }}>
        <Select
          value={measurementSelection}
          onChange={handleChange}
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
