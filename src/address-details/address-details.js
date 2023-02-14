import React, { useState } from "react";

const AddressDetails = ({
  activeStepNumber,
  activeStepNumberCallback,
  userAddressDetails,
}) => {
  const [userInformation, setUserInformation] = useState({
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });
  const [error, setError] = useState({
    addressLineOne: false,
    addressLineTwo: false,
    city: false,
    state: false,
    country: false,
    pinCode: false,
  });

  const toggleErrorShow = (dataFrom, value) => {
    switch (dataFrom) {
      case "addressLineOne":
        value.length === 0
          ? setError({ ...error, addressLineOne: true })
          : setError({ ...error, addressLineOne: false });
        break;
      case "addressLineTwo":
        value.length === 0
          ? setError({ ...error, addressLineTwo: true })
          : setError({ ...error, addressLineTwo: false });
        break;
      case "city":
        value.length === 0
          ? setError({ ...error, city: true })
          : setError({ ...error, city: false });
        break;
      case "state":
        value.length === 0
          ? setError({ ...error, state: true })
          : setError({ ...error, state: false });
        break;
      case "country":
        value.length === 0
          ? setError({ ...error, country: true })
          : setError({ ...error, country: false });
        break;
      case "pinCode":
        value.length === 0
          ? setError({ ...error, pinCode: true })
          : setError({ ...error, pinCode: false });
        break;
      default:
        break;
    }
  };

  const formValidation = () => {
    activeStepNumberCallback(2);
    userAddressDetails(userInformation);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col w-full m-4">
          <input
            placeholder="Address Line 1"
            className={`pl-[2%] h-10 outline-none border-[2px] rounded ${
              error.addressLineOne === false ? "border-greytext" : "border-red"
            }`}
            value={userInformation.addressLineOne}
            onChange={(e) => {
              setUserInformation({
                ...userInformation,
                addressLineOne: e.target.value,
              });
              toggleErrorShow("addressLineOne", e.target.value);
            }}
          />
          {error.addressLineOne === true && (
            <p className="pl-[2%] text-sm text-red">
              AddressLine1 is a required field
            </p>
          )}
        </div>
        <div className="flex flex-col w-full m-4">
          <input
            placeholder="Address Line 2"
            className={`pl-[2%] h-10 outline-none border-[2px] rounded ${
              error.addressLineTwo === false ? "border-greytext" : "border-red"
            }`}
            value={userInformation.addressLineTwo}
            onChange={(e) => {
              setUserInformation({
                ...userInformation,
                addressLineTwo: e.target.value,
              });
              toggleErrorShow("addressLineTwo", e.target.value);
            }}
          />
          {error.addressLineTwo === true && (
            <p className="pl-[2%] text-sm text-red">
              AddressLine2 is a required field
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col w-full ml-4 mr-4 mb-4">
          <input
            placeholder="City"
            className={`pl-[2%] h-10 outline-none border-[2px] rounded ${
              error.city === false ? "border-greytext" : "border-red"
            }`}
            value={userInformation.city}
            onChange={(e) => {
              setUserInformation({
                ...userInformation,
                city: e.target.value,
              });
              toggleErrorShow("city", e.target.value);
            }}
          />
          {error.city === true && (
            <p className="pl-[2%] text-sm text-red">City is a required field</p>
          )}
        </div>
        <div className="flex flex-col w-full ml-4 mr-4 mb-4">
          <input
            placeholder="State"
            className={`pl-[2%] h-10 outline-none border-[2px] rounded ${
              error.state === false ? "border-greytext" : "border-red"
            }`}
            value={userInformation.state}
            onChange={(e) => {
              setUserInformation({
                ...userInformation,
                state: e.target.value,
              });
              toggleErrorShow("state", e.target.value);
            }}
          />
          {error.state === true && (
            <p className="pl-[2%] text-sm text-red">
              State is a required field
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col w-full ml-4 mr-4 mb-4">
          <input
            placeholder="Country"
            className={`pl-[2%] h-10 outline-none border-[2px] rounded ${
              error.country === false ? "border-greytext" : "border-red"
            }`}
            value={userInformation.country}
            onChange={(e) => {
              setUserInformation({
                ...userInformation,
                country: e.target.value,
              });
              toggleErrorShow("country", e.target.value);
            }}
          />
          {error.country === true && (
            <p className="pl-[2%] text-sm text-red">
              LastName is a required field
            </p>
          )}
        </div>
        <div className="flex flex-col w-full ml-4 mr-4 mb-4">
          <input
            placeholder="Pin Code"
            className={`pl-[2%] h-10 outline-none border-[2px] rounded ${
              error.pinCode === false ? "border-greytext" : "border-red"
            }`}
            value={userInformation.pinCode}
            onChange={(e) => {
              setUserInformation({
                ...userInformation,
                pinCode: e.target.value,
              });
              toggleErrorShow("pinCode", e.target.value);
            }}
          />
          {error.pinCode === true && (
            <p className="pl-[2%] text-sm text-red">
              PinCode is a required field
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-row ml-8">
        <button
          className={`mr-8 p-2 rounded font-medium ${
            activeStepNumber === 0 ? "bg-greytext" : "bg-button text-white"
          }`}
          disabled={false}
          onClick={() => activeStepNumberCallback(0)}
        >
          BACK
        </button>
        <button
          onClick={formValidation}
          className={`mr-8 p-2 rounded bg-button font-medium text-white`}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default AddressDetails;
