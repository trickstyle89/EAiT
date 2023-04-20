import { Box, Container } from "@mui/material";
import Navbar from "../Navbar";
import HorizontalStepper from "./HorizontalStepper";
import TabPanel from "./SubCategoriesTabs";
function IngredientsPage() {
  return (
    <Box>
      <Navbar />
      <h3>Select your ingredients</h3>
      <HorizontalStepper />
      <TabPanel />
    </Box>
  );
}

export default IngredientsPage;
