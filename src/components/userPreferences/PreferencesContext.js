import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const PreferencesContext = createContext();

export function PreferencesProvider({ children }) {
  const [preferences, setPreferences] = useState({
    mealType: "",
    skillLevel: "",
    cookingTime: 0,
    measurementSelection: "",
  });

  const [ingredients, setIngredients] = useState({

  });

  const [selectedTools, setSelectedTools] = useState([]);


  const handleChangePreferences = (key, value) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  const handleChangeIngredients = (key, value) => {
    setIngredients((prev) => ({ ...prev, [key]: value }));
  };

  const value = {
    preferences,
    handleChangePreferences,
    ingredients,
    handleChangeIngredients,
    selectedTools,
    setSelectedTools,
  };

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error("usePreferences must be used within a PreferencesProvider");
  }
  return context;
}
