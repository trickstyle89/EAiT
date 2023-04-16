-- seed.sql

- Users
INSERT INTO users (first_name, last_name, email, user_password, skill_level)
VALUES ('John', 'Doe', 'johndoe@example.com', 'password', 'beginner');

-- Cooking tools
INSERT INTO cooking_tools (tool_name)
VALUES ('Slow Cooker'), ('BBQ'), ('Pressure Cooker'), ('Electric Stove Top'), ('wok');

-- User cooking tools
INSERT INTO user_cooking_tools (user_id, cooking_tool_id)
VALUES (1, 1), (1, 2), (1, 3);

-- Ingredient categories
INSERT INTO ingredient_category (category_name)
VALUES ('Vegetables'), ('Fruits'), ('Seafood'), ('Protein');

-- Ingredient subcategories
INSERT INTO ingredient_subcategory (subcategory_name, category_id)
VALUES ('Leafy Greens', 1), ('Root Vegetables', 1), ('Citrus Fruits', 2), ('Berries', 2), ('Seafood', 3), ('Beef', 4), ('Pork', 4), ('Chicken', 4), ('Vegan', 4);

-- Ingredients
INSERT INTO ingredients (category_id, ingredient_name, allergen,)
VALUES 
(1, 'Spinach', false),
(2, 'Orange', false),
(4, 'Ground beef', false),
(4, 'Pork chops', false),
(4, 'Chicken breast', false),
(3, 'Salmon fillet', false),
(4, 'Tofu', false);

-- Recipes
INSERT INTO recipes (image_id, recipe_name, recipe_tags, recipe_skill_level)
VALUES (1, 'Spinach Salad', 'salad, healthy, vegetarian', 'beginner');

-- Recipe cooking tools
INSERT INTO recipe_cooking_tools (recipe_id, cooking_tool_id)
VALUES (1, 1), (1, 2);

-- Recipe ingredients
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit)
VALUES 
  (1, 1, 200.0, 'grams'), 
  (1, 2, 2.0, 'count'), 
  (1, 4, 500.0, 'grams');

-- Instructions
INSERT INTO instructions (recipe_id, step_number, step_description, time_in_minutes)
VALUES (1, 1, 'Wash the spinach leaves', NULL),
(1, 2, 'Peel and slice the oranges', NULL),
(1, 3, 'Brown the ground beef in a skillet', 10);

-- Images
INSERT INTO images (recipe_id, image_url)
VALUES (1, 'https://example.com/spinach-salad.jpg');

-- Favorite recipes
INSERT INTO favorite_recipes (user_id, recipe_id)
VALUES (1, 1);

-- Dietary details
INSERT INTO dietary_details (detail_name, user_id)
VALUES ('Vegetarian', 1);

-- Conversion details
INSERT INTO measurement_conversions (from_unit, to_unit, conversion_rate)
VALUES ('cup', 'milliliter', 236.59),
('ounce', 'gram', 28.35),
('pound', 'kilogram', 0.453592);

/* How to implement

SELECT (1 * conversion_rate) AS converted_value
FROM measurement_conversions
WHERE from_unit = 'cup' AND to_unit = 'milliliter';

converted_value
---------------
236.59

*/