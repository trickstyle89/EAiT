import React from "react";

function SmallRecipeCard({ recipe }) {
  return (
    <div className="small-recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
    </div>
  );
}

export default SmallRecipeCard;
