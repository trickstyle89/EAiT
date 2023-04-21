import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import { usePreferences } from "./PreferencesContext";

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
      handleChangePreferences("selectedTools", preferences.selectedTools.filter((name) => name !== toolName)); // Update this line
    } else {
      handleChangePreferences("selectedTools", [...preferences.selectedTools, toolName]); // Update this line
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {cookingTools.map((tool) => (
        <Chip
          label={tool.tool_name}
          key={tool.id}
          onClick={() => handleClick(tool.tool_name)}
          style={{
            flex: "1 1 auto",
            minWidth: "5rem",
            maxWidth: "100%",
            height: 32,
            margin: "0.5rem",
          }}
          color={preferences.selectedTools.includes(tool.tool_name) ? "primary" : "default"}
          size="large"
          sx={{
            fontSize: "medium",
          }}
        />
      ))}
    </div>
  );
}

export default CookingToolsButtons;
