import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { usePreferences } from "./PreferencesContext";

function ChefModeButtons() {
  const { preferences, handleChangePreferences } = usePreferences();

  const handleClick = (mode) => {
    handleChangePreferences(mode, !preferences[mode]);
    console.log(mode);
  };

  return (
    <div>
      <Stack direction="column" spacing={3} width={"40rem"} display={"flex"}>
        <Chip
          sx={{
            height: "2",
            "& .MuiChip-label": {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
          }}
          variant="filled"
          label="Strict Mode"
          onClick={() => handleClick("Strict Mode")}
        ></Chip>
        <Chip
          sx={{
            height: "2",
            "& .MuiChip-label": {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
          }}
          variant="filled"
          label="Gourmet Mode"
          onClick={() => handleClick("Gourmet Mode")}
        ></Chip>
      </Stack>
    </div>
  );
}

export default ChefModeButtons;
