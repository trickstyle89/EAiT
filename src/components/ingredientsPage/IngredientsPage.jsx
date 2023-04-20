import { Box } from "@mui/material";
import { useState } from "react";
import Navbar from "../Navbar";
import HorizontalStepper from "./HorizontalStepper";
import BasicTabs from "./SubCategoriesTabs";
import axios from "axios";
import { usePreferences } from "../userPreferences/PreferencesContext";

const steps = [
  "Proteins",
  "Vegatables",
  "Fruits",
  "Starch",
  "Dairy",
  "Spices & Condiments",
  "Wine, Beer & Liquors",
];

function IngredientsPage() {
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const { preferences, selectedTools, ingredients, handleChangeIngredients } =
    usePreferences();

  const handleSubmit = async (e) => {
    console.log("Submitting preferences:", preferences);
    e.preventDefault();
    const requestData = {
      ...preferences,
      ingredients,
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
    <Box>
      <Navbar />
      <h3>Select your ingredients</h3>
      <HorizontalStepper
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <form onSubmit={handleSubmit}>
        <BasicTabs
          ingredients={ingredients}
          handleChangeIngredients={handleChangeIngredients}
          currentStep={currentStep}
        />
        <button type="submit">Generate Recipe</button>
      </form>
    </Box>
  );
}

export default IngredientsPage;
