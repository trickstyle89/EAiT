const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "password123",
      dietDetails: "Vegan",
      skillLevel: "Intermediate",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      password: "password123",
      dietDetails: "Vegetarian",
      skillLevel: "Beginner",
    },
  });

  const tools = [
    { toolName: "Knife" },
    { toolName: "Spatula" },
    { toolName: "Whisk" },
    { toolName: "Blender" },
  ];

  for (const tool of tools) {
    await prisma.cookingTool.create({ data: tool });
  }

  await prisma.userCookingTool.createMany({
    data: [
      { userId: user1.id, cookingToolId: 1 },
      { userId: user1.id, cookingToolId: 2 },
      { userId: user2.id, cookingToolId: 3 },
      { userId: user2.id, cookingToolId: 4 },
    ],
  });

  const categories = [
    { categoryName: "Fruits" },
    { categoryName: "Vegetables" },
    { categoryName: "Grains" },
    { categoryName: "Proteins" },
  ];

  for (const category of categories) {
    await prisma.ingredientCategory.create({ data: category });
  }

  const ingredients = [
    { categoryId: 1, name: "Apple", allergen: false, quantityUnit: "pcs" },
    { categoryId: 2, name: "Carrot", allergen: false, quantityUnit: "g" },
    { categoryId: 3, name: "Rice", allergen: false, quantityUnit: "g" },
    { categoryId: 4, name: "Chicken", allergen: false, quantityUnit: "g" },
  ];

  for (const ingredient of ingredients) {
    await prisma.ingredient.create({ data: ingredient });
  }

  const recipes = [
    { recipeName: "Carrot and Apple Salad", recipeTags: "vegetarian, healthy, easy", recipeSkillLevel: "Beginner" },
    { recipeName: "Chicken and Rice", recipeTags: "gluten-free, protein-packed", recipeSkillLevel: "Intermediate" },
  ];

  for (const recipe of recipes) {
    await prisma.recipe.create({ data: recipe });
  }

  await prisma.recipeIngredient.createMany({
    data: [
      { recipeId: 1, ingredientId: 1, quantity: 2 },
      { recipeId: 1, ingredientId: 2, quantity: 200 },
      { recipeId: 2, ingredientId: 3, quantity: 150 },
      { recipeId: 2, ingredientId: 4, quantity: 200 },
    ],
  });

  await prisma.recipeCookingTool.createMany({
    data: [
      { recipeId: 1, cookingToolId: 2 },
      { recipeId: 2, cookingToolId: 1 },
    ],
  });

  console.log("Data seeding completed successfully!");
}

main()
  .catch((error)

