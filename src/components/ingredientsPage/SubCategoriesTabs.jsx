import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { usePreferences } from "./PreferencesContext";
import Chip from "@mui/material/Chip";

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function BasicTabs(props) {
  const [ingredientsData, setIngredientsData] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  useEffect(() => {
    fetch("/api/ingredients")
      .then((response) => response.json())
      .then((data) => setIngredientsData(data.categories))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setSelectedTabIndex(0);
    setSelectedIngredients([]);
  }, [props.currentStep]);

  const handleTabChange = (event, newValue) => {
    setSelectedTabIndex(newValue);
  };

  const handleClick = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(selectedIngredients.filter((ing) => ing !== ingredient));
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
      { label: "Milk and Cream", subcategory: "milk_and_cream" },
      { label: "Butters and Yogurts", subcategory: "butters_and_yogurts" },
      { label: "Cheeses", subcategory: "cheeses" },
      { label: "Lactose Free", subcategory: "lactose_free" },
    ];
  }
  if (props.currentStep === 4) {
    tabs = [
      { label: "Oils", subcategory: "oils" },
      { label: "Spices", subcategory: "spices" },
      { label: "Spice Blends", subcategory: "spice_blends" },
      { label: "Aromatics", subcategory: "aromatics" },
      { label: "Baking Essentials", subcategory: "baking_essentials" },
      { label: "Condiments", subcategory: "condiments" },
    ];
  }
  if (props.currentStep === 5) {
    tabs = [
      { label: "Beer Spirits and Wines", subcategory: "beer_spirits_and_wines" },
    ];
  }

  const filteredIngredients = ingredientsData.filter((ingredient) =>
    ingredient.subcategory === tabs[selectedTabIndex].subcategory
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={selectedTabIndex} onChange={handleTabChange} aria-label="basic tabs example">
          {tabs.map((tab, index) => (
            <Tab label={tab.label} {...a11yProps(index)} key={index} />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={selectedTabIndex} index={selectedTabIndex}>
        {filteredIngredients.map((ingredient) => (
          <Chip
            label={ingredient.ingredient_name}
            key={ingredient.id}
            onClick={() => handleClick(ingredient.ingredient_name)}
            style={{
              flex: "1 1 auto",
              minWidth: "5rem",
              maxWidth: "100%",
              height: 32,
              margin: "0.5rem"
            }}
            color={selectedIngredients.includes(ingredient.ingredient_name) ? "primary" : "default"}
            size="large"
            sx={{ fontSize: "medium" }}
          />
        ))}
      </TabPanel>
    </Box>
  );
}

// // working code**************
// export default function BasicTabs(props) {
//   const [ingredientsData, setIngredientsData] = useState([]);
//   const [selectedIngredients, setSelectedIngredients] = useState([]);

//   useEffect(() => {
//     fetch("/api/ingredients")
//       .then((response) => response.json())
//       .then((data) => setIngredientsData(data.categories))
//       .catch((error) => console.log(error));
//   }, []);

//   const { ingredients, handleChangeIngredients, currentStep } = props;
//   const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);
//   console.log(ingredients)

//   const handleTabChange = (event, newValue) => {
//     setSelectedTabIndex(newValue);
//   };

//   const handleClick = (ingredient) => {
//     if (selectedIngredients.includes(ingredient)) {
//       setSelectedIngredients(selectedIngredients.filter((ing) => ing !== ingredient));
//     } else {
//       setSelectedIngredients([...selectedIngredients, ingredient]);
//     }
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       {
//         currentStep === 0 &&
//         <>
//           <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//             <Tabs value={selectedTabIndex} onChange={handleTabChange} aria-label="basic tabs example">
//               <Tab label="Beef" {...a11yProps(0)} />
//               <Tab label="Pork" {...a11yProps(1)} />
//               <Tab label="Poultry" {...a11yProps(2)} />
//               <Tab label="Seafood" {...a11yProps(3)} />
//               <Tab label="Vegetarian" {...a11yProps(4)} />
//             </Tabs>
//           </Box>
//           {selectedTabIndex === 0 && (
//             <TabPanel value={selectedTabIndex} index={0}>
//               {ingredientsData
//                 .filter((ingredient) => ingredient.subcategory === "beef")
//                 .map((ingredient) => (
//                   <Chip
//                     label={ingredient.ingredient_name}
//                     key={ingredient.id}
//                     onClick={() => handleClick(ingredient.ingredient_name)}
//                     style={{
//                       Width: "7rem",
//                       height: 32,
//                       margin: "0.5rem",
//                     }}
//                     color={selectedIngredients.includes(ingredient.ingredient_name) ? "primary" : "default"}
//                     size="large"
//                     sx={{
//                       fontSize: "medium",
//                     }}
//                   />
//                 ))}
//             </TabPanel>
//           )}
//           {selectedTabIndex === 1 && (
//             <TabPanel value={selectedTabIndex} index={1}>
//               {ingredientsData
//                 .filter((ingredient) => ingredient.subcategory === "pork")
//                 .map((ingredient) => (
//                   <Chip
//                     label={ingredient.ingredient_name}
//                     key={ingredient.id}
//                     onClick={() => handleClick(ingredient.ingredient_name)}
//                     style={{
//                       Width: "7rem",
//                       height: 32,
//                       margin: "0.5rem",
//                     }}
//                     color={selectedIngredients.includes(ingredient.ingredient_name) ? "primary" : "default"}
//                     size="large"
//                     sx={{
//                       fontSize: "medium",
//                     }}
//                   />
//                 ))}
//             </TabPanel>
//           )}
//           {selectedTabIndex === 2 && (
//             <TabPanel value={selectedTabIndex} index={2}>
//               {ingredientsData
//                 .filter((ingredient) => ingredient.subcategory === "poultry")
//                 .map((ingredient) => (
//                   <Chip
//                     label={ingredient.ingredient_name}
//                     key={ingredient.id}
//                     onClick={() => handleClick(ingredient.ingredient_name)}
//                     style={{
//                       Width: "7rem",
//                       height: 32,
//                       margin: "0.5rem",
//                     }}
//                     color={selectedIngredients.includes(ingredient.ingredient_name) ? "primary" : "default"}
//                     size="large"
//                     sx={{
//                       fontSize: "medium",
//                     }}
//                   />
//                 ))}
//             </TabPanel>
//           )}
//           {selectedTabIndex === 3 && (
//             <TabPanel value={selectedTabIndex} index={3}>
//               {ingredientsData
//                 .filter((ingredient) => ingredient.subcategory === "seafood")
//                 .map((ingredient) => (
//                   <Chip
//                     label={ingredient.ingredient_name}
//                     key={ingredient.id}
//                     onClick={() => handleClick(ingredient.ingredient_name)}
//                     style={{
//                       Width: "7rem",
//                       height: 32,
//                       margin: "0.5rem",
//                     }}
//                     color={selectedIngredients.includes(ingredient.ingredient_name) ? "primary" : "default"}
//                     size="large"
//                     sx={{
//                       fontSize: "medium",
//                     }}
//                   />
//                 ))}
//             </TabPanel>
//           )}
//           {selectedTabIndex === 4 && (
//             <TabPanel value={selectedTabIndex} index={4}>
//               {ingredientsData
//                 .filter((ingredient) => ingredient.subcategory === "vegetarian")
//                 .map((ingredient) => (
//                   <Chip
//                     label={ingredient.ingredient_name}
//                     key={ingredient.id}
//                     onClick={() => handleClick(ingredient.ingredient_name)}
//                     style={{
//                       Width: "7rem",
//                       height: 32,
//                       margin: "0.5rem",
//                     }}
//                     color={selectedIngredients.includes(ingredient.ingredient_name) ? "primary" : "default"}
//                     size="large"
//                     sx={{
//                       fontSize: "medium",
//                     }}
//                   />
//                 ))}
//             </TabPanel>
//           )}
//         </>
//       }
//       {
        // currentStep === 1 &&
        // <>
        //   <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        //     <Tabs value={selectedTabIndex} onChange={handleTabChange} aria-label="basic tabs example">
        //       <Tab label="Roots and Bulbs" {...a11yProps(0)} />
        //       <Tab label="Legumes" {...a11yProps(1)} />
        //       <Tab label="Cabbages" {...a11yProps(2)} />
        //       <Tab label="Fruit vegetables" {...a11yProps(3)} />
        //     </Tabs>
        //   </Box>
        //   <TabPanel value={selectedTabIndex} index={0}>
        //     {ingredientsData
        //       .filter((ingredient) => ingredient.subcategory === "roots_and_bulbs")
        //       .map((ingredient) => (
        //         <Chip
        //           label={ingredient.ingredient_name}
        //           key={ingredient.id}
        //           onClick={() => handleClick(ingredient.ingredient_name)}
        //           style={{
        //             Width: "7rem",
        //             height: 32,
        //             margin: "0.5rem",
        //           }}
        //           color={selectedIngredients.includes(ingredient.ingredient_name) ? "primary" : "default"}
        //           size="large"
        //           sx={{
        //             fontSize: "medium",
        //           }}
        //         />
        //       ))}
        //   </TabPanel>
        //   <TabPanel value={selectedTabIndex} index={1}>
        //     {ingredientsData
        //       .filter((ingredient) => ingredient.subcategory === "legumes")
        //       .map((ingredient) => (
        //         <Chip
        //           label={ingredient.ingredient_name}
        //           key={ingredient.id}
        //           onClick={() => handleClick(ingredient.ingredient_name)}
        //           style={{
        //             Width: "7rem",
        //             height: 32,
        //             margin: "0.5rem",
        //           }}
        //           color={selectedIngredients.includes(ingredient.ingredient_name) ? "primary" : "default"}
        //           size="large"
        //           sx={{
        //             fontSize: "medium",
        //           }}
        //         />
        //       ))}
        //   </TabPanel>
        //   <TabPanel value={selectedTabIndex} index={2}>
        //     {ingredientsData
        //       .filter((ingredient) => ingredient.subcategory === "cabbages")
        //       .map((ingredient) => (
        //         <Chip
        //           label={ingredient.ingredient_name}
        //           key={ingredient.id}
        //           onClick={() => handleClick(ingredient.ingredient_name)}
        //           style={{
        //             Width: "7rem",
        //             height: 32,
        //             margin: "0.5rem",
        //           }}
        //           color={selectedIngredients.includes(ingredient.ingredient_name) ? "primary" : "default"}
        //           size="large"
        //           sx={{
        //             fontSize: "medium",
        //           }}
        //         />
        //       ))}
        //   </TabPanel>
        //   <TabPanel value={selectedTabIndex} index={3}>
        //     {ingredientsData
        //       .filter((ingredient) => ingredient.subcategory === "fruit_vegetables")
        //       .map((ingredient) => (
        //         <Chip
        //           label={ingredient.ingredient_name}
        //           key={ingredient.id}
        //           onClick={() => handleClick(ingredient.ingredient_name)}
        //           style={{
        //             Width: "7rem",
        //             height: 32,
        //             margin: "0.5rem",
        //           }}
        //           color={selectedIngredients.includes(ingredient.ingredient_name) ? "primary" : "default"}
        //           size="large"
        //           sx={{
        //             fontSize: "medium",
        //           }}
        //         />
        //       ))}
        //   </TabPanel>
        // </>
//       }
//     </Box>
//   );
// }


// //******** KEEP
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function BasicTabs() {
//   const [value, setValue] = useState(0);
//   const [subCategories, setSubCategories] = useState([]);

//   useEffect(() => {
//     fetch("/api/ingredients")
//       .then((response) => response.json())
//       .then((data) => setSubCategories(data.subCategories))
//       .catch((error) => console.log(error));
//   }, []);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           {subCategories.map((subCategory, index) => (
//             <Tab key={index} label={subCategory.subcategory} {...a11yProps(index)} />
//           ))}
//         </Tabs>
//       </Box>
//       {subCategories.map((subCategory, index) => (
//         <TabPanel key={index} value={value} index={index}>
//           {subCategory.subcategory}
//         </TabPanel>
//       ))}
//     </Box>
//   );
// }