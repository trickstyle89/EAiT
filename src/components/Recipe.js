import React, { useState } from 'react';
import VerticalLinearStepper from './VerticalStepper';
import BasicStack from './StackMui';
import ControlledSwitches from './IngredientsSwitchMui';
import ImgMediaCard from './CardsMui'

function Recipe({ recipe }) {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prevState) => !prevState);
  };

  return (
    <div>
      <header>
        <h1>{recipe.name}</h1>
      </header>
      <main>
        <div>
          <ImgMediaCard recipe={recipe} />
        </div>
        <section>
          <h2>Ingredients:</h2>
          <BasicStack recipe={recipe} />
        </section>
        <section>
          <h2>Instructions:</h2>
          <ControlledSwitches
            checked={showInstructions}
            onChange={toggleInstructions}
            label="Show steps"
          />
          {showInstructions ? (
            <VerticalLinearStepper recipe={recipe} />
          ) : (
            recipe.instructions.map((instruction, index) => (
              <p key={index}>{instruction}</p>
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default Recipe;