import { Box } from "@mui/material";
import { useState } from "react";
import Navbar from "../Navbar";
import HorizontalStepper from "./HorizontalStepper";
import BasicTabs from "./SubCategoriesTabs";
import axios from "axios";
import { usePreferences } from "../userPreferences/PreferencesContext";
import { useNavigate } from "react-router-dom";


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
  const [currentStep, setCurrentStep] = useState(0);
  const { preferences, ingredients, handleChangeIngredients } =
    usePreferences();

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Submitting preferences:", preferences);
  
      const selectIngredientData = window.localStorage.getItem("selectIngredient");
      const storedIngredients = selectIngredientData ? JSON.parse(selectIngredientData) : [];
  
      const updatedPreferences = {
        ...preferences,
        ingredients: storedIngredients,
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
