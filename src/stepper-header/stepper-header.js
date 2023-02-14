import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["USER INFORMATION", "ADDRESS DETAILS", "Thank You"];

const StepperHeader = ({activeStepNumber}) => {

  return (
    <div className="mt-[1%]">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStepNumber} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
};

export default StepperHeader;
