DROP TABLE IF EXISTS user_cooking_tools CASCADE;


CREATE TABLE user_cooking_tools (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  cooking_tool_id INTEGER REFERENCES cooking_tools(id) ON DELETE CASCADE
);