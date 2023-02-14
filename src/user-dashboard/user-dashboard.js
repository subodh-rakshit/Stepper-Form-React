import React, { useState } from "react";
import AddressDetails from "../address-details/address-details";
import ConfirmationPage from "../confirmation-page/confirmation-page";
import StepperHeader from "../stepper-header/stepper-header";
import UserInformation from "../user-information/user-information";

const UserDashboard = () => {
  const [activeStepNumber, setActiveStepNumber] = useState(0);
  const [informationValues, setInformationvalues] =
    useState();
  const [addressDetailValues, setAddressDetailValues] =
    useState();

  return (
    <div>
      <StepperHeader activeStepNumber={activeStepNumber} />
      {activeStepNumber === 0 && (
        <UserInformation
          activeStepNumber={activeStepNumber}
          activeStepNumberCallback={(value) => setActiveStepNumber(value)}
          userInformationDetails={(dataFromUserInformation) =>
            setInformationvalues(dataFromUserInformation)
          }
        />
      )}
      {activeStepNumber === 1 && (
        <AddressDetails
          activeStepNumber={activeStepNumber}
          activeStepNumberCallback={(value) => setActiveStepNumber(value)}
          userAddressDetails={(dataFromAddress) =>
            setAddressDetailValues(dataFromAddress)
          }
        />
      )}
      {activeStepNumber === 2 && (
        <ConfirmationPage
          informationValues={informationValues}
          addressDetailValues={addressDetailValues}
        />
      )}
    </div>
  );
};

export default UserDashboard;
