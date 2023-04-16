import React from 'react';
import VerticalLinearStepper from './VerticalStepper';

function Recipe({ recipe }) {

  return (
    <div>
      <header>
        <h1>{recipe.name}</h1>
      </header>
      <main>
        <section>
          <h2>Ingredients:</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Instructions:</h2>
          <VerticalLinearStepper recipe={recipe} />
        </section>
        <section>
          <h2>Cooking time:</h2>
          <p>Meal cooking time: {recipe.cookingTime}
          </p>
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