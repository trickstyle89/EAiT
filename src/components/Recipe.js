import React, { useState } from 'react';
import VerticalLinearStepper from './VerticalStepper';
import BasicStack from './StackMui';
import ControlledSwitches from './IngredientsSwitchMui';

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
        <section>
          <h2>Cooking time:</h2>
          <p>Meal cooking time: {recipe.cookingTime}</p>
        </section>
        <section>
          <h2>Nutrition Information:</h2>
          <p>Calories per serving: {recipe.calories}</p>
        </section>
        <section>
          <h2>Image:</h2>
          <img src={recipe.image} alt={recipe.name} />
        </section>
      </main>
    </div>
  );
}

export default Recipe;