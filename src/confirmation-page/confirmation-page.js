import React from "react";

const ConfirmationPage = ({ informationValues, addressDetailValues }) => {
  return (
    <>
      <p className="flex text-center justify-center text-green font-normal mt-8 mb-10 text-5xl">
        Data added Successfully
      </p>
      <div className="flex flex-row border-b-[2px] border-greytext mr-4 ml-4">
        <div className="flex flex-1 items-center justify-center">Name</div>
        <div className="flex flex-1 items-center justify-center">Value</div>
      </div>
      {Object.keys(informationValues).map((data) => {
        return (
          <div className="flex justify-evenly border-b-[2px] border-greytext mr-4 ml-4">
            <div className="flex flex-1 items-center justify-center">
              {data}
            </div>
            <div className="flex flex-1 items-center justify-center">
              {Array(informationValues)[0][data].toString()}
            </div>
          </div>
        );
      })}
      {Object.keys(addressDetailValues).map((data) => {
        return (
          <div className="flex justify-evenly border-b-[2px] border-greytext mr-4 ml-4">
            <div className="flex flex-1 items-center justify-center">
              {data}
            </div>
            <div className="flex flex-1 items-center justify-center">
              {Array(addressDetailValues)[0][data].toString()}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ConfirmationPage;
