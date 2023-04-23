import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Recipe from "./recipePage/Recipe";
import PreferencePage from "./userPreferences/PreferencePage";
import HomePage from "./HomePage/HomePage";
import { PreferencesProvider } from "./userPreferences/PreferencesContext";
import IngredientsPage from "./ingredientsPage/IngredientsPage";
import "../scss/preferencePage.scss";

const Main = () => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      try {
        const response = await fetch("/api/recipe", {
          signal: abortController.signal,
        });
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="main">
      <PreferencesProvider>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/recipes" element={<Recipe recipe={recipe} />} />
          <Route exact path="/preferences" element={<PreferencePage />} />
          <Route exact path="/ingredients" element={<IngredientsPage />} />
        </Routes>
      </PreferencesProvider>
    </div>
  );
};

export default Main;
