import { Box } from "@mui/material";
import { useState } from "react";
import Navbar from "../Navbar";
import HorizontalStepper from "./HorizontalStepper";
import BasicTabs from "./SubCategoriesTabs";
import axios from "axios";
import { usePreferences } from "../userPreferences/PreferencesContext";
import { useNavigate } from "react-router-dom";
import { LoadingPage, MyCustomLogo } from "../recipePage/LoadingMUI";

function IngredientsPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const { preferences, ingredients, handleChangeIngredients } =
    usePreferences();
  const navigate = useNavigate();
  const [isGeneratingRecipe, setIsGeneratingRecipe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting preferences:", preferences);

    const selectIngredientData =
      window.localStorage.getItem("selectIngredient");
    const storedIngredients = selectIngredientData
      ? JSON.parse(selectIngredientData)
      : [];

    const updatedPreferences = {
      ...preferences,
      ingredients: storedIngredients,
    };

    try {
      setIsGeneratingRecipe(true);
      const response = await axios.post("/api/recipe", updatedPreferences);
      console.log("Test response:", response.data);

      navigate("/recipes");
    } catch (error) {
      console.error("Test error:", error.response?.data || error.message);
    } finally {
      setIsGeneratingRecipe(false);
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "relative",
          filter: isGeneratingRecipe ? "blur(5px)" : "none",
          zIndex: 1,
        }}
      >
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
      {isGeneratingRecipe && (<Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: isGeneratingRecipe ? "none" : "blur(5px)",
          transition: "backdrop-filter 0.5s",
        }}
      >
        <LoadingPage loadingLogo={<MyCustomLogo />} />
      </Box>
      )}
    </Box>
  );
}

export default IngredientsPage;
