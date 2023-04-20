import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function ChefModeButtons() {
  const handleClick = () => {
    console.log("You clicked the Chip.");
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
          onClick={handleClick}
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
          onClick={handleClick}
        ></Chip>
      </Stack>
    </div>
  );
}

export default ChefModeButtons;
