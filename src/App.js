import './css/styles.css';
import React, { useState, useEffect } from 'react';
import Recipe from './components/Recipe';

function App() {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/api/recipe')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setRecipe(data.recipe);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      {
        <Recipe recipe={recipe} />
      }
    </div>
  );
}

export default App;