import * as React from "react";
import { Switch, FormControlLabel } from "@mui/material";

export default function ControlledSwitches({
  checked = false,
  onChange,
  label,
}) {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={onChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      }
      label={label}
    />
  );
}
