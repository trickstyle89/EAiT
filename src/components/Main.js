import { Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';

const Main = () => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/recipe');
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);


  return (
    <Routes>
      <Route exact path="/" element={
        <Link to="/recipes">
          <button variant="outlined">
            Recipes
          </button>
        </Link>
      } />
      <Route exact path="/recipes" element={
        <>
          {recipe ? <Recipe recipe={recipe} /> : <div>Loading...</div>}
        </>
      } />
    </Routes>

  )
};
export default Main;
