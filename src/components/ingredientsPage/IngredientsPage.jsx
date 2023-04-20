import { Container } from "@mui/material";
import Navbar from "../Navbar";
import HorizontalStepper from "./HorizontalStepper";
import TabPanel from './SubCategoriesTabs'
function IngredientsPage() {
  return (
    <Container>
      <Navbar />
      <h3>Select your ingredients</h3>
      <HorizontalStepper />
      <TabPanel />
    </Container>
  );
}

export default IngredientsPage;
