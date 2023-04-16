INSERT INTO cooking_tools (tool_name)
VALUES 
   ('Slow Cooker'), 
   ('BBQ'),
   ('Smoker'), 
   ('Pressure Cooker'), 
   ('Electric Stove Top'), 
   ('Saucepan'),
   ('Stockpot'),
   ('Skillet'),
   ('Wok'),
   ('Roasting pan'),
   ('Casserole dish'),
   ('Dutch oven'),
   ('Baking sheet'),
   ('Griddle'),
   ('Grill pan'),
   ('Rice cooker'),
   ('Sous vide machine'),
   ('Blender'),
   ('Food processor'),
   ('Immersion blender'),
   ('Stand mixer'),
   ('Hand mixer'),
   ('Toaster oven'),
   ('Waffle maker'),
   ('Electric griddle'),
   ('Electric skillet'),
   ('Countertop deep fryer'),
   ('Electric pressure cooker');

INSERT INTO ingredient_category (category_name)
VALUES  ('Protein'), ('Vegetables'), ('Starch'), ('Fruits'), ('Dairy'), ('Spices & Condiments'), ('Wines & Spirits');

-- Ingredient subcategories
INSERT INTO ingredient_subcategory (subcategory_name, category_id)
VALUES 
('Chicken', 1), 
('Beef', 1), 
('Pork', 1), 
('Vegetarian ', 1), 
('Seafood', 1), 
('Leafy Greens', 2), 
('Legumes', 2),
('Fruit Vegetables', 2),
('Roots & Bulbs', 2), 
('Grains', 3), 
('Pastas', 3),
('Cereals', 3),
('Berries', 4),
('Common Fruits', 4),
('Tropical & Exotic', 4),
('Melons', 4),
('Cheese', 5),
('Milk & Cream', 5),
('Yogurt & Butter', 5),
('Lactose Free', 5),
('Commonly Used', 6),
('Aromatics', 6),
('Fresh Herbs', 6),
('Hot Spices', 6),
('Blends', 6),
('Baking Essentials', 6),
('Condiments', 6),
('Wine & Beer', 7),
('Liqour', 7),



