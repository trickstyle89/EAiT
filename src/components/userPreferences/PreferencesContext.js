import React, { createContext, useState, useEffect, useContext } from "react";

const PreferencesContext = createContext();

export function PreferencesProvider({ children }) {
  const [preferences, setPreferences] = useState({
    mealType: "",
    skillLevel: "",
    cookingTime: 0,
    measurementSelection: "",
    selectedAllergies: [],
    selectedTools: [],
    strictMode: false,
    gourmetMode: true
  });

  const [ingredients, setIngredients] = useState({

  });

  useEffect(() => {
    console.log("getting Previous Preferences");
    const data = window.localStorage.getItem("selectPreferences");
    if (data !== null) setPreferences(JSON.parse(data));
  }, []);

  const handleChangePreferences = (key, value) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
    const cookiePreferences = { ...preferences, [key]: value }
    window.localStorage.setItem("selectPreferences", JSON.stringify(cookiePreferences))
  };

  const handleChangeIngredients = (key, value) => {
    setIngredients((prev) => ({ ...prev, [key]: value }));
  };

  const value = {
    preferences,
    handleChangePreferences,
    ingredients,
    handleChangeIngredients,
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

