import React from "react";
import ImgMediaCard from "../CardsMui";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe">
      <main className="recipe-main">
        <div className="recipe-image-container">
          <ImgMediaCard recipe={recipe} className="recipe-image" />
        </div>
      </main>
    </div>
  );
}

export default RecipeCard;
