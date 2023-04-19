import React from "react";
import DiscreteSlider from "./TimeSlider";
import MealSelectLabel from "./MealSelectLabel";
import SkillSelectLabel from "./SkillSelectLabel";
import { Container } from "@mui/material";
import ChefModeButtons from "./ChefModeButtons";
import Navbar from "../Navbar";
import CookingToolsButtons from "./CookingToolsButtons";

function PreferencePage() {
  return (
    <Container>
      <Navbar></Navbar>
      <h3>Select Time</h3>
      <DiscreteSlider></DiscreteSlider>
      <h3>Select Meal</h3>
      <MealSelectLabel></MealSelectLabel>
      <h3>What is your cooking skill level?</h3>
      <SkillSelectLabel></SkillSelectLabel>
      <h3>Select your cooking mode</h3>
      <ChefModeButtons></ChefModeButtons>
      <h3>Select your cooking mode</h3>
      <CookingToolsButtons></CookingToolsButtons>
    </Container>
  );
}

export default PreferencePage;
