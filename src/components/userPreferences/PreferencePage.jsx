import React from "react";
import DiscreteSlider from "./TimeSlider";
import MealSelectLabel from "./MealSelectLabel";
import SkillSelectLabel from "./SkillSelectLabel";
import { Container } from "@mui/material";
import ChefModeButtons from "./ChefModeButtons";
import Navbar from "../Navbar";
import CookingToolsButtons from "./CookingToolsButtons";
import MeasurementSelectLabel from "./MeasurementSelectLabel";
import PickMyIngredientsButton from "./PickMyIngredientsButton";
import axios from "axios";
import { usePreferences } from "./PreferencesContext";


function PreferencePage() {
  const { preferences, handleChange } = usePreferences();

  const handleSubmit = async () => {
    try {
      console.log("Submitting preferences:", preferences);
      const response = await axios.post("/api/recipe", preferences);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };
  console.log("Current preferences:", preferences);

  return (
    <Container>
      <Navbar></Navbar>
      <h3>Select Time</h3>
      <DiscreteSlider></DiscreteSlider>
      <h3>Select Meal</h3>
      <MealSelectLabel value={preferences.mealType} onChange={handleChange}/>
      <h3>What is your cooking skill level?</h3>
      <SkillSelectLabel  value={preferences.skillLevel} onChange={handleChange}/>
      <h3>Select your kitchen tools</h3>
      <CookingToolsButtons></CookingToolsButtons>
      <h3>Select your cooking mode</h3>
      <ChefModeButtons></ChefModeButtons>
      <h3>Select a measurement option</h3>
      <MeasurementSelectLabel></MeasurementSelectLabel>
      <PickMyIngredientsButton></PickMyIngredientsButton>
      <button onClick={handleSubmit}>Submit</button>
    </Container>
  );
}

export default PreferencePage;
