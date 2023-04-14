import './css/styles.css';
import React, { useState, useEffect } from 'react';
import Recipe from './components/Recipe';

function App() {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    console.log('Before fetch');
    fetch('/api/recipe')
      .then(response => response.json())
      .then(data => {
        setRecipe(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      {recipe ? <Recipe recipe={recipe} /> : <div>Loading...</div>}
    </div>
  );
}

export default App;