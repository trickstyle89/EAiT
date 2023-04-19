import React, { useState } from "react";
import VerticalLinearStepper from "../VerticalStepper";
// import BasicStack from './StackMui';
import ControlledSwitches from "../IngredientsSwitchMui";
import ImgMediaCard from "../CardsMui";
import CheckboxLabels from "../CheckboxMui";
import Navbar from "../Navbar";
function Recipe({ recipe }) {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prevState) => !prevState);
  };

  return (
    <div className="recipe">
      <Navbar></Navbar>
      <main className="recipe-main">
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
              <VerticalLinearStepper recipe={recipe} className="recipe-steps" />
            ) : (
              recipe.instructions.map((instruction, index) => (
                <p key={index} className="recipe-instruction">
                  {instruction}
                </p>
              ))
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Recipe;
