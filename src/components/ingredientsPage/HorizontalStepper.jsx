import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

const steps = [
  "Proteins",
  "Vegatables",
  "Fruits",
  "Starch",
  "Dairy",
  "Spices & Condiments",
  "Wine, Beer & Liquors",
];

function HorizontalStepper(props) {
  const { currentStep, setCurrentStep } = props;
  const [completed, setCompleted] = useState({});

  const navigate = useNavigate();

  const handleGenerateRecipe = () => {
    navigate("/recipes");
  };

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return currentStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : currentStep + 1;
    setCurrentStep(newActiveStep);
    if (!completed[currentStep]) {
      handleComplete();
    }
  };

  const handleBack = () => {
    setCurrentStep((prevActiveStep) => prevActiveStep - 1);
    const newCompleted = completed;
    delete newCompleted[currentStep];
    setCompleted(newCompleted);
  };

  const handleStep = (step) => () => {
    setCurrentStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[currentStep] = true;
    setCompleted(newCompleted);
    if (isLastStep()) {
      navigate("/recipes");
    } else {
      handleNext();
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setCompleted({});
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5" mb={5} ml={4} mt={4}>
          Select your ingredients
        </Typography>
        <Stepper activeStep={currentStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={currentStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          {currentStep !== steps.length - 1 && (
            <Button onClick={handleNext} sx={{ mr: 1 }}>
              Next
            </Button>
          )}
          {currentStep === steps.length - 1 && <Button disabled></Button>}
        </Box>
      </Box>
    </>
  );
}
export default HorizontalStepper;

// ********KEEP THE CODE BELOW IT'S TAKING THE STEPS FROM DATABASE************

// function HorizontalStepper() {
//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     fetch("/api/ingredients")
//       .then((response) => response.json())
//       .then((data) => setCategories(data.categories))
//       .catch((error) => console.log(error));
//   }, []);
//   const steps = categories.map((category) => category.category);

//   const [activeStep, setActiveStep] = useState(0);
//   const [completed, setCompleted] = useState({});

//   const navigate = useNavigate();

//   const handleGenerateRecipe = () => {
//     navigate("/recipe");
//   };

//   const totalSteps = () => {
//     return steps.length;
//   };

//   const completedSteps = () => {
//     return Object.keys(completed).length;
//   };

//   const isLastStep = () => {
//     return activeStep === totalSteps() - 1;
//   };

//   const allStepsCompleted = () => {
//     return completedSteps() === totalSteps();
//   };

//   const handleNext = () => {
//     const newActiveStep =
//       isLastStep() && !allStepsCompleted()
//         ? steps.findIndex((step, i) => !(i in completed))
//         : activeStep + 1;
//     setActiveStep(newActiveStep);
//     if (!completed[activeStep]) {
//       handleComplete();
//     }
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     const newCompleted = completed;
//     delete newCompleted[activeStep];
//     setCompleted(newCompleted);
//   };

//   const handleStep = (step) => () => {
//     setActiveStep(step);
//   };

//   const handleComplete = () => {
//     const newCompleted = completed;
//     newCompleted[activeStep] = true;
//     setCompleted(newCompleted);
//     if (isLastStep()) {
//       navigate("/recipe");
//     } else {
//       handleNext();
//     }
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setCompleted({});
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Stepper activeStep={activeStep} alternativeLabel>
//         {steps.map((label, index) => (
//           <Step key={label} completed={completed[index]}>
//             <StepButton color="inherit" onClick={handleStep(index)}>
//               {label}
//             </StepButton>
//           </Step>
//         ))}
//       </Stepper>
//       <div>
//         {allStepsCompleted() ? (
//           <React.Fragment>
//             <Typography sx={{ mt: 2, mb: 1 }}>
//               All steps completed - you&apos;re finished
//             </Typography>
//             <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//               <Box sx={{ flex: "1 1 auto" }} />
//               <Button onClick={handleReset}>Reset</Button>
//             </Box>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mr: 1 }}
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: "1 1 auto" }} />
//               {activeStep !== steps.length - 1 && (
//                 <Button onClick={handleNext} sx={{ mr: 1 }}>
//                   Next
//                 </Button>
//               )}
//               {activeStep === steps.length - 1 && (
//                 <Button onClick={handleGenerateRecipe}>Generate Recipe</Button>
//               )}
//             </Box>
//           </React.Fragment>
//         )}
//       </div>
//     </Box>
//   );
// }
