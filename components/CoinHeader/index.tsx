import React from "react";

const CoinHeader = () => {
  return (
    <div className="grid grid-cols-9 justify-items-center">
      <p className=" justify-self-center ml-5">symbol</p>
      <p className=" justify-self-start ml-4">name</p>
      <p className=" justify-self-start ml-4">price</p>
      <p className=" justify-self-end">low</p>
      <p className=" col-span-2">price 24h</p>
      <p className=" justify-self-start">high</p>
      <p>market cap.</p>
      <p className=" justify-self-center ml-3">24h %</p>
    </div>
  );
};

export default CoinHeader;
