const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const axios = require("axios");
const app = express();

const port = process.env.PORT || 3001;

const path = require('path');
app.use(morgan('tiny'));
app.use(cors());
app.use(express.static('public'));
require('dotenv').config();

const apiKey = process.env.OPENAI_API_KEY;
const googleCustomSearchKey = process.env.GOOGLE_CUSTOM_SEARCH_KEY;
const googleCustomSearchEngineId = process.env.GOOGLE_CUSTOM_SEARCH_ENGINE_ID;

const openaiClient = axios.create({
  headers: {
    Authorization: "Bearer " + apiKey,
  },
});

const googleImagesClient = axios.create({
  baseURL: "https://www.googleapis.com/customsearch/v1",
  params: {
    key: googleCustomSearchKey,
    cx: googleCustomSearchEngineId,
    searchType: "image",
    imgSize: "large",
    imgType: "photo",
    imgAspectRatio: "4:3",
    q: "",
  },
});

app.get("/api/recipe", (req, res) => {
  const ingredients = ['papaya', 'chicken', 'cilantro', 'rice', 'red onion', 'celery', 'halibut'];
  const serves = 4;
  const measurement = 'imperial';
  const prompt = `make me a recipe using ${ingredients.join(", ")}, serves ${serves} people, with Cooking time:, and at the end can you give me the calories per serve as well. the measurement is ${measurement}`;

  const params = {
    prompt,
    model: "text-davinci-003",
    max_tokens: 500,
    temperature: 0,
  };

  openaiClient
    .post("https://api.openai.com/v1/completions", params)
    .then((result) => {
      const recipeText = result.data.choices[0].text;
      const recipeLines = recipeText.split("\n").filter((line) => line.trim().length > 0);
      const recipeName = recipeLines.shift();
      const ingredientsStartIndex = recipeLines.findIndex((line) => line.includes("Ingredients:"));
      const instructionsStartIndex = recipeLines.findIndex((line) => line.includes("Instructions:"));
      const caloriesStartIndex = recipeLines.findIndex((line) => line.includes("Calories per serve:"));
      const cookingTimeStartIndex = recipeLines.findIndex((line) => line.includes("Cooking Time:"));
      const recipeIngredients = recipeLines
        .slice(ingredientsStartIndex + 1, instructionsStartIndex)
        .filter((line) => line.trim().length > 0);
      const recipeInstructions = recipeLines
        .slice(instructionsStartIndex + 1, caloriesStartIndex)
        .filter((line) => line.trim().length > 0);
      const cookingTime = cookingTimeStartIndex >= 0 ? recipeLines[cookingTimeStartIndex].replace("Cooking Time: ", "") : "";
      const caloriesPerServe = recipeLines[caloriesStartIndex].replace("Calories per serve: ", "");

      console.log(recipeLines);

      const googleImagesParams = {
        q: recipeName,
        num: 1,
      };

      googleImagesClient
        .get("", { params: googleImagesParams })
        .then((googleImagesResult) => {
          const recipeImage = googleImagesResult.data.items[0].link;
          const recipe = {
            name: recipeName,
            ingredients: recipeIngredients,
            instructions: recipeInstructions,
            cookingTime: cookingTime,
            calories: caloriesPerServe,
            image: recipeImage,
          };
          res.json(recipe);
        })

        .catch((err) => {
          console.log(err);
          res.status(500).send("An error occurred");
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("An error occurred");
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
app.use(express.static(path.join(__dirname, 'client', 'build')));