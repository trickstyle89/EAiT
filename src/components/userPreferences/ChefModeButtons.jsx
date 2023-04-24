import React from "react";
import Chip from "@mui/material/Chip";
import { usePreferences } from "./PreferencesContext";
import { Typography, Box } from "@mui/material";

function ChefModeButtons() {
  const { preferences, handleChangePreferences } = usePreferences();

  const handleClick = (mode) => {
    if (mode === "strictMode") {
      handleChangePreferences("strictMode", true);
      handleChangePreferences("gourmetMode", false);
      console.log("strict Mode selected");
    } else if (mode === "gourmetMode") {
      handleChangePreferences("gourmetMode", true);
      handleChangePreferences("strictMode", false);
      console.log("gourmet mode selected");
    }
  };

  return (
    <div>
      <Typography variant="h6">5. Select your cooking mode</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 1,
        }}
      >
        <Chip
          style={{
            flex: "auto",
            height: 70,
            margin: "0.5rem",
          }}
          sx={{
            fontSize: "large",
            display: "flex",
            justifyContent: "flex-start",
          }}
          color={preferences.gourmetMode ? "secondary" : "default"}
          onClick={() => handleClick("gourmetMode")}
          label={
            <>
              <Typography variant="h6" component="span" style={{ margin: 2 }}>
                Best Combined
              </Typography>
              <br />
              <Typography
                variant="body2"
                component="span"
                style={{ margin: 2 }}
              >
                Create recipes with your selected ingredients plus some extras
                to elevate your recipes.
              </Typography>
            </>
          }
        ></Chip>
        <Chip
          style={{
            flex: "auto",
            height: 70,
            margin: "0.5rem",
          }}
          sx={{
            fontSize: "large",
            display: "flex",
            justifyContent: "flex-start",
          }}
          color={preferences.strictMode ? "secondary" : "default"}
          onClick={() => handleClick("strictMode")}
          label={
            <>
              <Typography variant="h6" component="span">
                Selected Ingredients Only
              </Typography>
              <br />
              <Typography variant="body2" component="span">
                Create recipes using only the specific ingredients that you have
                selected, nothing more!
              </Typography>
            </>
          }
        ></Chip>
      </Box>
    </div>
  );
}

export default ChefModeButtons;
