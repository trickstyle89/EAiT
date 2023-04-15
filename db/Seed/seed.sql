-- seed.sql

-- Users
INSERT INTO users (first_name, last_name, email, password, diet_details, skill_level) VALUES
  ('John', 'Doe', 'john.doe@example.com', '123', 'Vegan', 'Intermediate'),

-- Cooking Tools
INSERT INTO cooking_tools (tool_name) VALUES
  ('Slow Cooker'),
  ('Pressure Cooker'),
  ('Dutch Over'),
  ('Smoker'),
  ('BBQ Grill');

-- User Cooking Tools
INSERT INTO user_cooking_tools (user_id, cooking_tool_id) VALUES
  (1, 1),
  (1, 2),
  (1, 3),
  (1, 4),
  (1, 5);

-- Ingredient Category
INSERT INTO ingredient_category (category_name) VALUES
  ('Fruits'),
  ('Vegetables'),
  ('Grains'),
  ('Proteins');

-- Ingredients
INSERT INTO ingredients (category_id, name, allergen, quantity_unit) VALUES
  (1, 'Apple', false, 'pcs'),
  (2, 'Carrot', false, 'g'),
  (3, 'Rice', false, 'g'),
  (4, 'Chicken', false, 'g');

-- Recipes
INSERT INTO recipes (recipe_name, recipe_tags, recipe_skill_level) VALUES
  ('Carrot and Apple Salad', 'vegetarian, healthy, easy', 'Beginner'),
  ('Chicken and Rice', 'gluten-free, protein-packed', 'Intermediate');

-- Recipe Ingredients
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity) VALUES
  (1, 1, 2),
  (1, 2, 200),
  (2, 3, 150),
  (2, 4, 200);

-- Recipe Cooking Tools
INSERT INTO recipe_cooking_tools (recipe_id, cooking_tool_id) VALUES
  (1, 1),
  (1, 3),
  (2, 1),
  (2, 2);

-- Instructions
INSERT INTO instructions (recipe_id, step_number, step_description, time_needed) VALUES
  (1, 1, 'Peel and cut the apples and carrots into thin strips.', 10),
  (1, 2, 'In a bowl, whisk together lemon juice, olive oil, salt, and pepper.', 5),
  (1, 3, 'Add the apples and carrots to the dressing and toss to combine.', 5),
  (2, 1, 'Cook the rice according to the package instructions.', 20),
  (2, 2, 'Season the chicken with salt and pepper.', 5),
  (2, 3, 'In a skillet, heat oil and cook the chicken until browned on both sides.', 15),
  (2, 4, 'Serve the chicken over the cooked rice.', 5);

-- Images
INSERT INTO images (recipe_id, image_url) VALUES
  (1, 'https://example.com/images/carrot-apple-salad.jpg'),
  (2, 'https://example.com/images/chicken-rice.jpg');

-- Favorite Recipes
INSERT INTO favorite_recipes (user_id, recipe_id) VALUES
  (1, 1),
  (1, 2);
