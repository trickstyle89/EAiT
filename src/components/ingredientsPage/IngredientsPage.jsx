import { Container } from "@mui/material";
import Navbar from "../Navbar";
import HorizontalStepper from "./HorizontalStepper";

function IngredientsPage() {
  return (
    <Container>
      <Navbar></Navbar>
      <h3>Select your ingredients</h3>
      <HorizontalStepper></HorizontalStepper>
    </Container>
  );
}

export default IngredientsPage;
