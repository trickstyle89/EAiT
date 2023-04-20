import React from "react";
import DiscreteSlider from "./TimeSlider";
import MealSelectLabel from "./MealSelectLabel";
import SkillSelectLabel from "./SkillSelectLabel";
import { Box, Container } from "@mui/material";
import ChefModeButtons from "./ChefModeButtons";
import Navbar from "../Navbar";
import CookingToolsButtons from "./CookingToolsButtons";
import MeasurementSelectLabel from "./MeasurementSelectLabel";
import PickMyIngredientsButton from "./PickMyIngredientsButton";
import axios from "axios";
import { usePreferences } from "./PreferencesContext";

import "../../scss/preferencePage.scss";

function PreferencePage() {
  const { preferences, handleChange, selectedTools } = usePreferences();

  const handleSubmit = async () => {
    console.log("Submitting preferences:", preferences);

    const requestData = {
      ...preferences,
      selectedTools,
    };

    try {
    const response = await axios.post("/api/recipe", requestData);
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching recipe:", error);
  }
};

  return (
    <div>
      <Navbar></Navbar>
      <div className="select-meal-skill-titles">
        <h3>1. Select Meal</h3>
        <h3>2. What is your cooking skill level?</h3>
      </div>
      <div className="select-meal-skill">
        <MealSelectLabel value={preferences.mealType} onChange={handleChange} />
        <SkillSelectLabel
          value={preferences.skillLevel}
          onChange={handleChange}
        />
      </div>
      <div className="time-select">
        <h3>3. How much time do you have?</h3>
        <DiscreteSlider></DiscreteSlider>
      </div>
      <div className="tool-select">
        <h3>4. Select your kitchen tools</h3>
        <CookingToolsButtons></CookingToolsButtons>
      </div>
      <div className="cooking-mode-select">
        <h3>5. Select your cooking mode</h3>
        <ChefModeButtons></ChefModeButtons>
      </div>
      <div className="measurement-select">
        <h3>6. Select a measurement option</h3>
        <MeasurementSelectLabel></MeasurementSelectLabel>
      </div>
      <PickMyIngredientsButton></PickMyIngredientsButton>
      <button variant="contained" onClick={handleSubmit}>Submit</button>
      <footer className="footer">
        <p>EAiT &copy; 2023</p>
      </footer>
    </div>
  );
}

export default PreferencePage;
