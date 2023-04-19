import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import { usePreferences } from "./PreferencesContext";

function CookingToolsButtons() {
  const [cookingTools, setCookingTools] = useState([]);
  const { selectedTools, setSelectedTools } = usePreferences();

  useEffect(() => {
    fetch("/api/test")
      .then((response) => response.json())
      .then((data) => setCookingTools(data))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (toolName) => {
    if (selectedTools.includes(toolName)) {
      setSelectedTools(selectedTools.filter((name) => name !== toolName));
    } else {
      setSelectedTools([...selectedTools, toolName]);
    }
  };

  return (
    <div>
      {cookingTools.map((tool) => (
        <Chip
          label={tool.tool_name}
          key={tool.id}
          onClick={() => handleClick(tool.tool_name)}
          style={{ width: "125px", height: "27px", margin: "0.5rem" }}
          color={selectedTools.includes(tool.tool_name) ? "primary" : "default"}
        />
      ))}
    </div>
  );
}

export default CookingToolsButtons;
