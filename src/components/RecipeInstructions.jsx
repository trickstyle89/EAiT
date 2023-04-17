import React, { useState } from "react";
import VerticalLinearStepper from "./VerticalStepper";
import ControlledSwitches from "./IngredientsSwitchMui";

function RecipeInstructions({ recipe }) {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prevState) => !prevState);
  };

  return (
    <div className="recipe">
      <main className="recipe-main">
        <section className="recipe-instructions">
          <h2 className="recipe-section-title">Instructions</h2>
          <ControlledSwitches
            checked={showInstructions}
            onChange={toggleInstructions}
            label="Follow along"
            className="recipe-switch"
          />
          {showInstructions ? (
            <VerticalLinearStepper recipe={recipe} className="recipe-steps" />
          ) : (
            recipe.instructions.map((instruction, index) => (
              <p key={index} className="recipe-instruction">
                {instruction}
              </p>
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default RecipeInstructions;
