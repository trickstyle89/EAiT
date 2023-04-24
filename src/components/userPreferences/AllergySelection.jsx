import React from "react";
import { usePreferences } from "./PreferencesContext";
import { Box, Typography } from "@mui/material";
import { ToolChip } from "./CookingToolsButtons";

function AllergySelection({ onChange }) {
  const { preferences, handleChangePreferences } = usePreferences();
  const { selectedAllergies } = preferences;

  const handleClick = (allergy) => {
    let updatedAllergies;
    if (selectedAllergies.includes(allergy)) {
      updatedAllergies = selectedAllergies.filter(
        (allergies) => allergies !== allergy
      );
    } else {
      updatedAllergies = [...selectedAllergies, allergy];
    }

    handleChangePreferences("selectedAllergies", updatedAllergies);
  };

  const allergies = [
    "Dairy",
    "Eggs",
    "Fish",
    "Shellfish",
    "Tree Nuts",
    "Peanuts",
    "Wheat",
    "Soy Beans",
    "Sesame",
    "Vegan",
    "Vegetarian",
    "Gluten-free",
  ];

  return (
    <>
      <Typography variant="h6">
        7. Do you have any allergies or dietary restrictions?
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          mt: 1,
        }}
      >
        {allergies.map((allergy, index) => (
          <ToolChip
            key={index}
            label={allergy}
            onClick={() => handleClick(allergy)}
            style={{
              maxWidth: "8rem",
            }}
            color={
              selectedAllergies.includes(allergy) ? "secondary" : "default"
            }
          />
        ))}
      </Box>
    </>
  );
}

export default AllergySelection;
