import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Recipe from "./recipePage/Recipe";
import PreferencePage from "./userPreferences/PreferencePage";
import HomePage from "./HomePage/HomePage";
import IngredientsPage from "./ingredientsPage/IngredientsPage";

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
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route
        exact
        path="/recipes"
        element={
          <>{recipe ? <Recipe recipe={recipe} /> : <div>Loading...</div>}</>
        }
      />
      <Route
        exact
        path="/preferences"
        element={<PreferencePage></PreferencePage>}
      />
      <Route
        exact
        path="/ingredients"
        element={<IngredientsPage></IngredientsPage>}
      />
    </Routes>
  );
};
export default Main;
