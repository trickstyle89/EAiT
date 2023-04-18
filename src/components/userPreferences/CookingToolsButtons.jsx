import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";

function CookingToolsButtons() {
  const [cookingTools, setCookingTools] = useState([]);

  useEffect(() => {
    fetch("/api/test")
      .then((response) => response.json())
      .then((data) => setCookingTools(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {cookingTools.map((tool) => (
        <Chip label={tool.tool_name} key={tool.id} />
      ))}
    </div>
  );
}

export default CookingToolsButtons;
