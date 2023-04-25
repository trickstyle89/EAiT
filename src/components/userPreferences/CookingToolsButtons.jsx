import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import { usePreferences } from "./PreferencesContext";
import { Typography, Box } from "@mui/material";
import styled from "@emotion/styled";

export const ToolChip = styled(Chip)`
  flex: 1 1 auto;
  height: 32px;
  margin: 0.5rem;
  font-size: large;
  size: large;
`;


function CookingToolsButtons() {
  const [cookingTools, setCookingTools] = useState([]);
  const { preferences, handleChangePreferences } = usePreferences();

  useEffect(() => {
    fetch("/api/test")
      .then((response) => response.json())
      .then((data) => setCookingTools(data))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (toolName) => {
    if (preferences.selectedTools.includes(toolName)) {
      handleChangePreferences(
        "selectedTools",
        preferences.selectedTools.filter((name) => name !== toolName)
      ); // Update this line
    } else {
      handleChangePreferences("selectedTools", [
        ...preferences.selectedTools,
        toolName,
      ]); // Update this line
    }
  };

  return (
    <>
      <Typography variant="h6">6. Select your cooking tools</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          mt: 1,
        }}
      >
        {cookingTools.map((tool) => (
          <ToolChip
            style={{
              maxWidth: "10rem",
            }}
            label={tool.tool_name}
            key={tool.id}
            onClick={() => handleClick(tool.tool_name)}
            color={
              preferences.selectedTools.includes(tool.tool_name)
                ? "secondary"
                : "default"
            }
          />
        ))}
      </Box>
    </>
  );
}

export default CookingToolsButtons;
