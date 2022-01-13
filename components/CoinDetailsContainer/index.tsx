import React from "react";

const CoinDetailsContainer = (props: any) => {
  console.log(props.id);

  return <div>{props.id}</div>;
};

export default CoinDetailsContainer;
