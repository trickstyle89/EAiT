import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Tab, Tabs, Card } from "@mui/material";
import { ToolChip } from "../userPreferences/CookingToolsButtons";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function BasicTabs(props) {
  const [ingredientsData, setIngredientsData] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState(
    retrieveIngredients()
  );
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  useEffect(() => {
    fetch("/api/ingredients")
      .then((response) => response.json())
      .then((data) => setIngredientsData(data.categories))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setSelectedTabIndex(0);
  }, [props.currentStep]);

  useEffect(() => {
    // console.log("selectedIngredients", selectedIngredients);
    window.localStorage.setItem(
      "selectIngredient",
      JSON.stringify(selectedIngredients)
    );
    props.setDisabled(selectedIngredients.length < 3);
  }, [selectedIngredients]);

  useEffect(() => {
    console.log("gettingSelectedIngredients");
    const data = window.localStorage.getItem("selectIngredient");
    if (data !== null) setSelectedIngredients(JSON.parse(data));
  }, []);

  function retrieveIngredients() {
    const data = window.localStorage.getItem("selectIngredient");
    if (data === null) {
      return [];
    } else {
      return JSON.parse(data);
    }
  }

  const handleTabChange = (event, newValue) => {
    setSelectedTabIndex(newValue);
  };

  const handleClick = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(
        selectedIngredients.filter((ing) => ing !== ingredient)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  let tabs = [
    { label: "Beef", subcategory: "beef" },
    { label: "Pork", subcategory: "pork" },
    { label: "Poultry", subcategory: "poultry" },
    { label: "Seafood", subcategory: "seafood" },
    { label: "Vegetarian", subcategory: "vegetarian" },
  ];

  if (props.currentStep === 1) {
    tabs = [
      { label: "Roots and Bulbs", subcategory: "roots_and_bulbs" },
      { label: "Legumes", subcategory: "legumes" },
      { label: "Cabbages", subcategory: "cabbages" },
      { label: "Fruit Vegetables", subcategory: "fruit_vegetables" },
    ];
  }
  if (props.currentStep === 2) {
    tabs = [
      { label: "Common Fruits", subcategory: "common_fruits" },
      { label: "Citrus Tropical", subcategory: "citrus_tropical" },
    ];
  }
  if (props.currentStep === 3) {
    tabs = [
      { label: "Grains", subcategory: "grains" },
      { label: "Bread and Wraps", subcategory: "bread_and_wraps" },
      { label: "Noodles and Pastas", subcategory: "noodles_and_pastas" },
      { label: "Cereals", subcategory: "cereals" },
      { label: "Others", subcategory: "others" },
    ];
  }
  if (props.currentStep === 4) {
    tabs = [
      { label: "Milk and Cream", subcategory: "milk_and_cream" },
      { label: "Butters and Yogurts", subcategory: "butters_and_yogurts" },
      { label: "Cheeses", subcategory: "cheeses" },
      { label: "Lactose Free", subcategory: "lactose_free" },
    ];
  }
  if (props.currentStep === 5) {
    tabs = [
      { label: "Oils", subcategory: "oils" },
      { label: "Spices", subcategory: "spices" },
      { label: "Spice Blends", subcategory: "spice_blends" },
      { label: "Aromatics", subcategory: "aromatics" },
      { label: "Baking Essentials", subcategory: "baking_essentials" },
      { label: "Condiments", subcategory: "condiments" },
    ];
  }
  if (props.currentStep === 6) {
    tabs = [
      {
        label: "Beer Spirits and Wines",
        subcategory: "beer_spirits_and_wines",
      },
    ];
  }
  const filteredIngredients = ingredientsData.filter(
    (ingredient) =>
      tabs[selectedTabIndex] &&
      ingredient.subcategory === tabs[selectedTabIndex].subcategory
  );

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          mt: 3,
          ml: 10,
          mr: 10,
          height: "30vh",
        }}
      >
        <Box sx={{ height: "100%", overflowY: "auto" }}>
          <Tabs
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              backgroundColor: "#e4e6d4",
            }}
            value={selectedTabIndex}
            onChange={handleTabChange}
            indicatorColor="primary"
            aria-label="basic tabs example"
          >
            {tabs.map((tab, index) => (
              <Tab
                label={tab.label}
                {...a11yProps(index)}
                key={index}
                sx={{
                  fontSize: "medium",
                  color: "black",
                  "&:hover": {
                    color: "#717744",
                  },
                }}
              />
            ))}
          </Tabs>
          <TabPanel value={selectedTabIndex} index={selectedTabIndex}>
            {filteredIngredients.map((ingredient) => (
              <ToolChip
                label={ingredient.ingredient_name}
                key={ingredient.id}
                onClick={() => handleClick(ingredient.ingredient_name)}
                color={
                  selectedIngredients.includes(ingredient.ingredient_name)
                    ? "secondary"
                    : "default"
                }
              />
            ))}
          </TabPanel>
        </Box>
      </Card>
      <Card
        variant="outlined"
        sx={{
          mt: 3,
          ml: 10,
          mr: 10,
          height: "20vh",
        }}
      >
        <Box sx={{ height: "100%", overflowY: "auto" }}>
          <Tabs value={0} sx={{ backgroundColor: "#e4e6d4" }}>
            <Tab
              label={"Your Selected Ingredients"}
              disabled
              sx={{
                fontSize: "medium",
                color: "black",
                "&:hover": {
                  color: "#717744",
                },
              }}
            />
          </Tabs>
          <Box sx={{ m: 2 }}>
            {selectedIngredients.length === 0 ? (
              <Typography sx={{ fontSize: "large" }}>
                Please select ingredients to view them here.
              </Typography>
            ) : (
              selectedIngredients.map((ingredient) => (
                <ToolChip
                  onDelete={() => {
                    handleClick(ingredient);
                  }}
                  onClick={() => {
                    handleClick(ingredient);
                  }}
                  key={ingredient}
                  label={ingredient}
                  color={"secondary"}
                  sx={{ "&:hover": { background: "#f77272" } }}
                />
              ))
            )}
          </Box>
        </Box>
      </Card>
    </>
  );
}
