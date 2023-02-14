import React, { useState } from "react";

const UserInformation = ({
  activeStepNumber,
  activeStepNumberCallback,
  userInformationDetails,
}) => {
  const [userInformation, setUserInformation] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    birthday: "",
    age: "",
    bloodgrp: "",
    height: "",
    weight: "",
    gender: "",
    martialStatus: "",
  });
  const [error, setError] = useState({
    firstName: false,
    middleName: false,
    lastName: false,
    mobileNo: false,
    email: false,
    birthday: false,
    age: false,
    bloodgrp: false,
    height: false,
    weight: false,
    gender: false,
    martialStatus: false,
  });

  const toggleErrorShow = (dataFrom, value) => {
    switch (dataFrom) {
      case "firstName":
        value.length === 0
          ? setError({ ...error, firstName: true })
          : setError({ ...error, firstName: false });
        break;
      case "middleName":
        value.length === 0
          ? setError({ ...error, middleName: true })
          : setError({ ...error, middleName: false });
        break;
      case "lastName":
        value.length === 0
          ? setError({ ...error, lastName: true })
          : setError({ ...error, lastName: false });
        break;
      case "mobileNo":
        value.length === 0
          ? setError({ ...error, mobileNo: true })
          : setError({ ...error, mobileNo: false });
        break;
      case "email":
        value.length === 0
          ? setError({ ...error, email: true })
          : setError({ ...error, email: false });
        break;
      case "birthday":
        value.length === 0
          ? setError({ ...error, birthday: true })
          : setError({ ...error, birthday: false });
        break;
      case "age":
        value.length === 0
          ? setError({ ...error, age: true })
          : setError({ ...error, age: false });
        break;
      case "bloodgrp":
        value.length === 0
          ? setError({ ...error, bloodgrp: true })
          : setError({ ...error, bloodgrp: false });
        break;
      case "height":
        value.length === 0
          ? setError({ ...error, height: true })
          : setError({ ...error, height: false });
        break;
      case "weight":
        value.length === 0
          ? setError({ ...error, weight: true })
          : setError({ ...error, weight: false });
        break;
      case "gender":
        value.length === 0
          ? setError({ ...error, gender: true })
          : setError({ ...error, gender: false });
        break;
      case "martialStatus":
        value.length === 0
          ? setError({ ...error, martialStatus: true })
          : setError({ ...error, martialStatus: false });
        break;
      default:
        break;
    }
  };

  const formValidation = () => {
    let trueValue = 0;
    Object.keys(userInformation).forEach((userData, userIndex) => {
      if (userInformation[userData] === "") {
        Object.keys(error).forEach((errorData, errorIndex) => {
          if (errorData === userData) {
            error[errorData] = true;
            setError({...error});
          }
        });
      } else if (userInformation[userData].length > 0) {
        Object.keys(error).forEach((errorData, errorIndex) => {
          if (errorData === userData) {
            error[errorData] = false;
            setError({...error});
          }
        });
      }
    });
    Object.keys(error).forEach((data, index) => {
      if (error[data] === true) {
        trueValue++;
      }
    });
    if (trueValue === 0) {
      activeStepNumberCallback(1);
      userInformationDetails(userInformation);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex lg:flex-row justify-center items-center max-sm:flex-col max-sm:m-4">
        <div className="flex flex-col w-full m-4">
          <input
            placeholder="First Name"
            className={`pl-[2%] h-10 outline-none border-[2px] rounded ${
              error.firstName === false ? "border-greytext" : "border-red"
            }`}
            value={userInformation.firstName}
            onChange={(e) => {
              setUserInformation({
                ...userInformation,
                firstName: e.target.value,
              });
              toggleErrorShow("firstName", e.target.value);
            }}
          />
          {error.firstName === true && (
            <p className="pl-[2%] text-sm text-red">
              FirstName is a required field
            </p>
          )}
        </div>
        <div className="flex flex-col w-full md:m-4 sm:m-4">
          <input
            placeholder="Middle Name"
            className={`pl-[2%] h-10 outline-none border-[2px] rounded ${
              error.middleName === false ? "border-greytext" : "border-red"
            }`}
            value={userInformation.middleName}
            onChange={(e) => {
              setUserInformation({
                ...userInformation,
                middleName: e.target.value,
              });
              toggleErrorShow("middleName", e.target.value);
            }}
          />
          {error.middleName === true && (
            <p className="pl-[2%] text-sm text-red">
              MiddleName is a required field
            </p>
          )}
        </div>
      </div>

      <div className="flex lg:flex-row justify-evenly items-center max-sm:flex-col max-sm:mr-4 max-sm:ml-4">
        <div className="flex flex-col w-full ml-4 mr-4 mb-4">
          <input
            placeholder="Last Name"
            className={`pl-[2%] h-10 outline-none border-[2px] rounded ${
              error.lastName === false ? "border-greytext" : "border-red"
            }`}
            value={userInformation.lastName}
            onChange={(e) => {
              setUserInformation({
                ...userInformation,
                lastName: e.target.value,
              });
              toggleErrorShow("lastName", e.target.value);
            }}
          />
          {error.lastName === true && (
            <p className="pl-[2%] text-sm text-red">
              LastName is a required field
            </p>
          )}
        </div>
        <div className="flex flex-col w-full ml-4 mr-4 mb-4">
          <input
            placeholder="Mobile No"
            className={`pl-[2%] h-10 outline-none border-[2px] rounded ${
              error.mobileNo === false ? "border-greytext" : "border-red"
            }`}
            value={userInformation.mobileNo}
            onChange={(e) => {
              setUserInformation({
                ...userInformation,
                mobileNo: e.target.value,
              });
              toggleErrorShow("mobileNo", e.target.value);
            }}
          />
          {error.mobileNo === true && (
            <p className="pl-[2%] text-sm text-red">
              MobileNo is a required field
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-row justify-evenly items-center max-sm:flex-col max-sm:mr-4 max-sm:ml-4">
        <div className="flex flex-col w-full ml-4 mr-4 mb-4">
          <input
            placeholder="Email"
            className={`pl-[2%] h-10 outline-none border-[2px] rounded ${
              error.email === false ? "border-greytext" : "border-red"
            }`}
            value={userInformation.email}
            onChange={(e) => {
              setUserInformation({
                ...userInformation,
                email: e.target.value,
              });
              toggleErrorShow("email", e.target.value);
            }}
          />
          {error.email === true && (
            <p className="pl-[2%] text-sm text-red">
              Email is a required field
            </p>
          )}
        </div>
        <div className="flex flex-col w-full ml-4 mr-4 sm:mb-4">
          <input
            placeholder="Birthday"
            className={`pl-[2%] h-10 outline-none border-[2px] rounded ${
              error.birthday === false ? "border-greytext" : "border-red"
            }`}
            value={userInformation.birthday}
            onChange={(e) => {
              setUserInformation({
                ...userInformation,
                birthday: e.target.value,
              });
              toggleErrorShow("birthday", e.target.value);
            }}
          />
          {error.birthday === true && (
            <p className="pl-[2%] text-sm text-red">
              Birthday is a required field
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-row justify-evenly items-center max-sm:flex-col max-sm:m-4">
        <div className="flex flex-col w-full ml-4 mr-4 mb-4">
          <input
            placeholder="Age"
            className={`pl-[2%] h-10 outline-none border-[2px] rounded ${
              error.age === false ? "border-greytext" : "border-red"
            }`}
            value={userInformation.age}
            onChange={(e) => {
              setUserInformation({
                ...userInformation,
                age: e.target.value,
              });
              toggleErrorShow("age", e.target.value);
            }}
          />
          {error.age === true && (
            <p className="pl-[2%] text-sm text-red">Age is a required field</p>
          )}
        </div>
        <div className="flex flex-col w-full ml-4 mr-4 sm:mb-4">
          <input
            placeholder="Blood Group"
            className={`pl-[2%] h-10 outline-none border-[2px] rounded ${
              error.bloodgrp === false ? "border-greytext" : "border-red"
            }`}
            value={userInformation.bloodgrp}
            onChange={(e) => {
              setUserInformation({
                ...userInformation,
                bloodgrp: e.target.value,
              });
              toggleErrorShow("bloodgrp", e.target.value);
            }}
          />
          {error.bloodgrp === true && (
            <p className="pl-[2%] text-sm text-red">
              BloodGroup is a required field
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-row justify-evenly items-center max-sm:flex-col max-lg:ml-4 max-lg:mr-4">
        <div className="flex flex-col w-full ml-4 mr-4 mb-4">
          <input
            placeholder="Height"
            className={`pl-[2%] h-10 outline-none border-[2px] rounded ${
              error.height === false ? "border-greytext" : "border-red"
            }`}
            value={userInformation.height}
            onChange={(e) => {
              setUserInformation({
                ...userInformation,
                height: e.target.value,
              });
              toggleErrorShow("height", e.target.value);
            }}
          />
          {error.height === true && (
            <p className="pl-[2%] text-sm text-red">
              Height is a required field
            </p>
          )}
        </div>

        <div className="flex flex-col w-full ml-4 mr-4 mb-4">
          <input
            placeholder="Weight"
            className={`pl-[2%] h-10 outline-none border-[2px] rounded ${
              error.weight === false ? "border-greytext" : "border-red"
            }`}
            value={userInformation.weight}
            onChange={(e) => {
              setUserInformation({
                ...userInformation,
                weight: e.target.value,
              });
              toggleErrorShow("weight", e.target.value);
            }}
          />
          {error.weight === true && (
            <p className="pl-[2%] text-sm text-red">
              Weight is a required field
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-row items-center max-sm:flex-col max-sm:m-4">
        <div className="flex flex-1 flex-col ml-4 mr-4 mb-4">
          <p
            className={`${
              error.gender === false ? "text-greytext" : "text-red"
            } mb-2`}
          >
            Gender
          </p>
          <div className="flex flex-row flex-wrap">
            <input
              type="radio"
              className="mr-2"
              checked={userInformation.gender === "Male"}
              onClick={() =>
                setUserInformation({ ...userInformation, gender: "Male" })
              }
            />
            <span className="mr-4">Male</span>
            <input
              type="radio"
              className="mr-2"
              checked={userInformation.gender === "Female"}
              onClick={() =>
                setUserInformation({ ...userInformation, gender: "Female" })
              }
            />
            <span>Female</span>
          </div>
          {error.gender === true && (
            <p className="pl-[2%] text-sm text-red">
              Please Select Your Gender
            </p>
          )}
        </div>

        <div className="flex flex-1 flex-col ml-4 mr-4 mb-4">
          <p
            className={`${
              error.martialStatus === false ? "text-greytext" : "text-red"
            } mb-2`}
          >
            Martial Status
          </p>
          <div className="flex flex-row flex-wrap">
            <input
              type="radio"
              className="mr-2"
              checked={userInformation.martialStatus === "Single"}
              onClick={() =>
                setUserInformation({
                  ...userInformation,
                  martialStatus: "Single",
                })
              }
            />
            <span className="mr-4">Single</span>
            <input
              type="radio"
              className="mr-2"
              checked={userInformation.martialStatus === "Married"}
              onClick={() =>
                setUserInformation({
                  ...userInformation,
                  martialStatus: "Married",
                })
              }
            />
            <span className="mr-4">Married</span>
            <input
              type="radio"
              className="mr-2"
              checked={userInformation.martialStatus === "Divorced"}
              onClick={() =>
                setUserInformation({
                  ...userInformation,
                  martialStatus: "Divorced",
                })
              }
            />
            <span className="mr-4">Divorced</span>
            <input
              type="radio"
              className="mr-2"
              checked={userInformation.martialStatus === "Widowed"}
              onClick={() =>
                setUserInformation({
                  ...userInformation,
                  martialStatus: "Widowed",
                })
              }
            />
            <span className="mr-4">Widowed</span>
          </div>
          {error.weight === true && (
            <p className="pl-[2%] text-sm text-red">
              Please Select Martial Status
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-row ml-8">
        <button
          className={`mr-8 p-2 rounded font-medium ${
            activeStepNumber === 0 ? "bg-greytext" : "bg-button text-white"
          }`}
          disabled={true}
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

export default UserInformation;
