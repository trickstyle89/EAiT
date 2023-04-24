import React, { useState, useEffect } from "react";
import DiscreteSlider from "./TimeSlider";
import MealSelectLabel from "./MealSelectLabel";
import SkillSelectLabel from "./SkillSelectLabel";
import ChefModeButtons from "./ChefModeButtons";
import CookingToolsButtons from "./CookingToolsButtons";
import NumberOfServingsSelectLabel from "./NumberOfServingsSelectLabel";
import { useNavigate } from "react-router-dom";
import { usePreferences } from "./PreferencesContext";
import AllergySelection from "./AllergySelection";
import { Box, Paper, Button } from "@mui/material";
import axios from "axios";

function PreferencePage() {
  const { preferences, handleChangePreferences, selectedAllergies } =
    usePreferences();
  console.log(Object.values(preferences));
  const [disableButton, setDisableButton] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const disable = Object.entries(preferences)
      .filter(
        ([key]) =>
          key !== "strictMode" &&
          key !== "gourmetMode" &&
          key !== "selectedAllergies"
      )
      .some(([key, value]) => {
        if (Array.isArray(value)) {
          return value.length === 0;
        }
        return value === false || value === "" || value === 0;
      });
    setDisableButton(disable);
  }, [preferences]);

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
      <Box className="homepage">
        <Box className="bg-background">
          <Paper
            variant="outlined"
            sx={{
              m: 12,
              mt: 8,
              mb: 8,
              backgroundColor: "#fbfcf9",
              borderRadius: 2,
              boxShadow: 12,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                mt: 4,
                mb: 6,
                mr: 4,
                ml: 4,
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
              <NumberOfServingsSelectLabel onChange={handleChangePreferences} />
            </Box>

            <Box
              sx={{
                ml: 4,
                mr: 4,
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
                ml: 4,
                mr: 4,
                mb: 5,
              }}
            >
              <ChefModeButtons />
            </Box>
            <Box
              sx={{
                ml: 5,
                mr: 5,
                mb: 5,
              }}
            >
              <CookingToolsButtons onChange={handleChangePreferences} />
            </Box>

            <Box
              sx={{
                ml: 5,
                mr: 5,
                mb: 5,
              }}
            >
              <AllergySelection
                selectedAllergies={selectedAllergies}
                onChange={handleChangePreferences}
              />
            </Box>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onClick={handleSubmit}
                onChange={handleChangePreferences}
                disabled={disableButton}
                size="large"
                href="/ingredients"
                variant="contained"
                color="primary"
                sx={{
                  my: 2,
                  mb: 5,
                  fontSize: "large",
                  fontFamily: "inherit",
                  "&:hover": {
                    background: "#5E671B",
                    color: "white",
                  },
                }}
              >
                Select Ingredients
              </Button>
            </div>
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default PreferencePage;
