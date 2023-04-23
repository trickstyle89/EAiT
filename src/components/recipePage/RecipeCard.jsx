import React from "react";
import VerticalLinearStepper from "../VerticalStepper";
import ControlledSwitches from "../IngredientsSwitchMui";
import ImgMediaCard from "../CardsMui";
import CheckboxLabels from "../CheckboxMui";

function RecipeCard({ recipe, showInstructions, toggleInstructions }) {
  return (
    <div className="recipe-card">
      <div className="recipe-image-container">
        <ImgMediaCard recipe={recipe} className="recipe-image" />
      </div>
      <div className="recipe-sections">
        <section className="recipe-ingredients">
          <h2 className="recipe-section-title">Ingredients:</h2>
          <CheckboxLabels
            recipe={recipe}
            className="recipe-ingredients-list"
          />
        </section>
        <section className="recipe-instructions">
          <h2 className="recipe-section-title">Instructions:</h2>
          <ControlledSwitches
            checked={showInstructions}
            onChange={toggleInstructions}
            label="Follow along"
            className="recipe-switch"
          />
          {showInstructions ? (
            <VerticalLinearStepper
              recipe={recipe}
              className="recipe-steps"
            />
          ) : (
            recipe.instructions.map((instruction, index) => (
              <p key={index} className="recipe-instruction">
                {instruction}
              </p>
            ))
          )}
        </section>
      </div>
    </div>
  );
}

export default RecipeCard;