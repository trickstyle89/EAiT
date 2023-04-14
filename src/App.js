import './css/styles.css';
import React, { useState, useEffect } from 'react';
import Recipe from './components/Recipe';

function App() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/recipe')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setRecipe(data.recipe);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Recipe recipe={recipe} />
      )}
    </div>
  );
}

export default App;