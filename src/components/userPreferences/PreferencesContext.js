import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const PreferencesContext = createContext();

export function PreferencesProvider({ children }) {
  const [preferences, setPreferences] = useState({
    mealType: "",
    skillLevel: "",
  });

  const [selectedTools, setSelectedTools] = useState([]);


  const handleChange = (key, value) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  const handleSendSelectedTools = () => {
    console.log('handle send selected tools', selectedTools);
    axios
      .post("http://localhost:3001/api/recipe", { selectedTools })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const value = {
    preferences,
    handleChange,
    selectedTools,
    setSelectedTools,
    handleSendSelectedTools,
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
