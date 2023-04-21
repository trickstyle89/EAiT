import React from "react";
import DiscreteSlider from "./TimeSlider";
import MealSelectLabel from "./MealSelectLabel";
import SkillSelectLabel from "./SkillSelectLabel";
// import { Box, Container } from "@mui/material";
import ChefModeButtons from "./ChefModeButtons";
import Navbar from "../Navbar";
import CookingToolsButtons from "./CookingToolsButtons";
import MeasurementSelectLabel from "./MeasurementSelectLabel";
import PickMyIngredientsButton from "./PickMyIngredientsButton";
import { useNavigate } from "react-router-dom";
import { usePreferences } from "./PreferencesContext";

import "../../scss/preferencePage.scss";
import AllergySelection from "./AllergySelection";

function PreferencePage() {
  const { preferences, handleChangePreferences, selectedAllergies } =
    usePreferences();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log("Submitting preferences:", preferences);

    navigate("/ingredients");
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="select-meal-skill-titles">
        <h3>1. Select Meal</h3>
        <h3>2. What is your cooking skill level?</h3>
      </div>
      <div className="select-meal-skill">
        <MealSelectLabel
          value={preferences.mealType}
          onChange={handleChangePreferences}
        />
        <SkillSelectLabel
          value={preferences.skillLevel}
          onChange={handleChangePreferences}
        />
      </div>
      <div className="time-select">
        <h3>3. How much time do you have?</h3>
        <DiscreteSlider
          onChange={handleChangePreferences}
          className="time-slider"
        />
      </div>
      <div className="tool-select">
        <h3>4. Select your kitchen tools</h3>
        <CookingToolsButtons onChange={handleChangePreferences} />
      </div>
      <div className="cooking-mode-select">
        <h3>5. Select your cooking mode</h3>
        <ChefModeButtons onChange={handleChangePreferences} />
      </div>
      <div className="measurement-select">
        <h3>6. Select a measurement option</h3>
        <MeasurementSelectLabel onChange={handleChangePreferences} />
      </div>
      <div className="allergy-select">
        <h3>7. Do you have any allergies or dietary restrictions?</h3>
        <AllergySelection allergies={selectedAllergies}></AllergySelection>
      </div>
      <PickMyIngredientsButton onChange={handleChangePreferences} />
      <button variant="contained" onClick={handleSubmit}>
        Submit
      </button>
      <footer className="footer">
        <p>EAiT &copy; 2023</p>
      </footer>
    </div>
  );
}

export default PreferencePage;
