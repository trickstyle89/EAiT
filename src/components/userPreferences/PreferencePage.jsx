import React from "react";
import DiscreteSlider from "./TimeSlider";
import MealSelectLabel from "./MealSelectLabel";
import SkillSelectLabel from "./SkillSelectLabel";
import ChefModeButtons from "./ChefModeButtons";
import CookingToolsButtons from "./CookingToolsButtons";
import MeasurementSelectLabel from "./MeasurementSelectLabel";
import PickMyIngredientsButton from "./PickMyIngredientsButton";
import { useNavigate } from "react-router-dom";
import { usePreferences } from "./PreferencesContext";
import AllergySelection from "./AllergySelection";
import { Box, Paper } from "@mui/material";
import axios from "axios";

// import "../../scss/preferencePage.scss";

function PreferencePage() {
  const { preferences, handleChangePreferences, selectedAllergies } =
    usePreferences();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log("Submitting preferences:", preferences);

    const selectIngredientData =
      window.localStorage.getItem("selectIngredient");
    const ingredients = selectIngredientData
      ? JSON.parse(selectIngredientData)
      : [];

    const updatedPreferences = {
      ...preferences,
      ingredients,
    };

    try {
      const response = await axios.post("/api/recipe", updatedPreferences);
      console.log("Test response:", response.data);
      navigate("/recipes");
    } catch (error) {
      console.error("Test error:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          margin: 4,
          backgroundColor: "#fbfcf9",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            mt: 4,
            mb: 6,
            mr: 6,
            ml: 6,
          }}
        >
          <MealSelectLabel
            value={preferences.mealType}
            onChange={handleChangePreferences}
          />
          <SkillSelectLabel
            value={preferences.skillLevel}
            onChange={handleChangePreferences}
          />
          <MeasurementSelectLabel onChange={handleChangePreferences} />
        </Box>

        <Box
          sx={{
            ml: 6,
            mr: 6,
            mb: 5,
          }}
        >
          <DiscreteSlider
            onChange={handleChangePreferences}
            className="time-slider"
          />
        </Box>
        <Box
          sx={{
            ml: 6,
            mr: 6,
            mb: 5,
          }}
        >
          <CookingToolsButtons onChange={handleChangePreferences} />
        </Box>
        <Box
          sx={{
            ml: 6,
            mr: 6,
            mb: 5,
          }}
        >
          <ChefModeButtons />
        </Box>

        <Box
          sx={{
            ml: 6,
            mr: 6,
            mb: 5,
          }}
        >
          <AllergySelection
            selectedAllergies={selectedAllergies}
            onChange={handleChangePreferences}
          />
        </Box>
      </Paper>
      <PickMyIngredientsButton
        onClick={handleSubmit}
        onChange={handleChangePreferences}
      />
    </>
  );
}

export default PreferencePage;
