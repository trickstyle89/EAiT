DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS cooking_tools CASCADE;
DROP TABLE IF EXISTS ingredients CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  user_password VARCHAR(255) NOT NULL,
);

CREATE TABLE cooking_tools (
  id SERIAL PRIMARY KEY,
  tool_name VARCHAR(255) NOT NULL
);

CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY,
  ingredient_name VARCHAR(255) NOT NULL,
  category VARCHAR(255),
  subcategory VARCHAR(255)
);


