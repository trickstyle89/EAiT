import { Box, Button, Paper } from "@mui/material";
import { useState } from "react";
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
                position: "relative",
                filter: isGeneratingRecipe ? "blur(5px)" : "none",
                zIndex: 1,
              }}
            >
              <HorizontalStepper
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
              />
              <BasicTabs
                ingredients={ingredients}
                handleChangeIngredients={handleChangeIngredients}
                currentStep={currentStep}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Button
                    type="submit"
                    size="large"
                    variant="contained"
                    color="primary"
                    sx={{
                      mt: 3,
                      mb: 5,
                      fontSize: "large",
                      fontFamily: "inherit",
                      "&:hover": {
                        background: "#5E671B",
                        color: "white",
                      },
                    }}
                  >
                    Generate Recipe
                  </Button>
                </form>
              </Box>
            </Box>
            {isGeneratingRecipe && (
              <Box
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
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default IngredientsPage;
