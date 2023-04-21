import React from "react";
import { usePreferences } from "./PreferencesContext";
import { Chip } from "@mui/material";

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
    <div>
      {allergies.map((allergy, index) => (
        <Chip
          key={index}
          label={allergy}
          onClick={() => handleClick(allergy)}
          style={{
            Width: "7rem",
            height: 32,
            margin: "0.5rem",
          }}
          color={selectedAllergies.includes(allergy) ? "primary" : "default"}
          size="large"
          sx={{
            fontSize: "medium",
          }}
        />
      ))}
    </div>
  );
}

export default AllergySelection;
