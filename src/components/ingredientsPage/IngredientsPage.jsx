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
      setIsGeneratingRecipe(true); // set the state variable to true before sending the request
      const response = await axios.post("/api/recipe", updatedPreferences);
      console.log("Test response:", response.data);

      navigate("/recipes");
    } catch (error) {
      console.error("Test error:", error.response?.data || error.message);
    } finally {
      setIsGeneratingRecipe(false); // set the state variable to false once the response is received
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        filter: isGeneratingRecipe ? "blur(5px)" : "none",
      }}
    >
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

      {isGeneratingRecipe && (
        <Box
          sx={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <LoadingPage loadingLogo={<MyCustomLogo />} />
        </Box>
      )}
    </Box>
  );
}

export default IngredientsPage;
