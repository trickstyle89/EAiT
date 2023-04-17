import React from "react";
import CheckboxLabels from "./CheckboxMui";

function RecipeIngredients({ recipe }) {
  return (
    <div className="recipe">
      <main className="recipe-main">
        <section className="recipe-ingredients">
          <h2 className="recipe-section-title">Ingredients</h2>
          <CheckboxLabels recipe={recipe} className="recipe-ingredients-list" />
        </section>
      </main>
    </div>
  );
}

export default RecipeIngredients;
