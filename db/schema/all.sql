DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS cooking_tools CASCADE;
DROP TABLE IF EXISTS user_cooking_tools CASCADE;
DROP TABLE IF EXISTS recipes CASCADE;
DROP TABLE IF EXISTS recipe_cooking_tools CASCADE;
DROP TABLE IF EXISTS ingredients CASCADE;
DROP TABLE IF EXISTS ingredient_category CASCADE;
DROP TABLE IF EXISTS recipe_ingredients CASCADE;
DROP TABLE IF EXISTS instructions CASCADE;
DROP TABLE IF EXISTS images CASCADE;
DROP TABLE IF EXISTS favorite_recipes CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  diet_details TEXT,
  skill_level VARCHAR(255)
);

CREATE TABLE cooking_tools (
  id SERIAL PRIMARY KEY,
  tool_name VARCHAR(255) NOT NULL
);

CREATE TABLE user_cooking_tools (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  cooking_tool_id INTEGER REFERENCES cooking_tools(id) ON DELETE CASCADE
);

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  image_id INTEGER,
  recipe_name VARCHAR(255) NOT NULL,
  recipe_tags TEXT,
  recipe_skill_level VARCHAR(255),
  FOREIGN KEY (image_id) REFERENCES images(id) ON DELETE SET NULL
);

CREATE TABLE recipe_cooking_tools (
  id SERIAL PRIMARY KEY,
  recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
  cooking_tool_id INTEGER REFERENCES cooking_tools(id) ON DELETE CASCADE
);

CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY,
  category_id INTEGER REFERENCES ingredient_category(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  allergen BOOLEAN NOT NULL DEFAULT false,
  quantity_unit VARCHAR(255)
);

CREATE TABLE ingredient_category (
  id SERIAL PRIMARY KEY,
  category_name VARCHAR(255) NOT NULL
);

CREATE TABLE recipe_ingredients (
  id SERIAL PRIMARY KEY,
  recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
  ingredient_id INTEGER REFERENCES ingredients(id) ON DELETE CASCADE,
  quantity DECIMAL(10, 2) NOT NULL
);

CREATE TABLE instructions (
  id SERIAL PRIMARY KEY,
  recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
  step_number INTEGER NOT NULL,
  step_description TEXT NOT NULL,
  time_needed INTEGER
);

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL
);

CREATE TABLE favorite_recipes (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE
);