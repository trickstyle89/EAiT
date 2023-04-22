import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { usePreferences } from "./PreferencesContext";
import { Typography } from "@mui/material";

function ChefModeButtons() {
  const { preferences, handleChangePreferences } = usePreferences();

  const handleClick = (mode) => {
    if (mode === "strictMode") {
      handleChangePreferences("strictMode", !preferences.strictMode);
      handleChangePreferences("gourmetMode", false);
      console.log("strict Mode selected");
    } else if (mode === "gourmetMode") {
      handleChangePreferences("gourmetMode", !preferences.gourmetMode);
      handleChangePreferences("strictMode", false);
      console.log("gourmet mode selected");
    } else {
      handleChangePreferences("strictMode", false);
      handleChangePreferences("gourmetMode", false);
    }
  };

  return (
    <div>
      <Stack spacing={2}>
        <Chip
          style={{
            height: 70,
            width: 670,
            marginTop: 10,
          }}
          color={preferences.strictMode ? "primary" : "default"}
          onClick={() => handleClick("strictMode")}
          label={
            <>
              <Typography variant="h6" component="span" style={{ margin: 2 }}>
                Selected Ingredients Only
              </Typography>
              <br />
              <Typography
                variant="body1"
                component="span"
                style={{ margin: 2 }}
              >
                Create recipes using only the specific ingredients that you have
                selected, nothing more!
              </Typography>
            </>
          }
        ></Chip>
        <Chip
          style={{
            height: 70,
            width: 670,
          }}
          color={preferences.gourmetMode ? "primary" : "default"}
          onClick={() => handleClick("gourmetMode")}
          label={
            <>
              <Typography variant="h6" component="span" style={{ margin: 2 }}>
                Best Combined
              </Typography>
              <br />
              <Typography
                variant="body1"
                component="span"
                style={{ margin: 2 }}
              >
                Create recipes with your selected ingredients plus some extras
                to elevate your recipes.
              </Typography>
            </>
          }
        ></Chip>
      </Stack>
    </div>
  );
}

export default ChefModeButtons;
