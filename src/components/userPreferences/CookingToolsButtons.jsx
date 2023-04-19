import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import axios from "axios";

function CookingToolsButtons() {
  const [cookingTools, setCookingTools] = useState([]);
  const [selectedTools, setSelectedTools] = useState([]);

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

  const handleSendSelectedTools = () => {
    console.log('handle send selected tools', selectedTools);
    axios
      .post("http://localhost:3001/api/recipe", { selectedTools })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
      <Button variant="contained" onClick={handleSendSelectedTools}>
        Send Selected Tools
      </Button>
    </div>
  );
}

export default CookingToolsButtons;
