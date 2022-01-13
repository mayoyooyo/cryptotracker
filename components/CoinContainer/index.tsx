import React, { useEffect } from "react";
import Image from "next/image";
import ProgessBar from "../ProgessBar";

const currentPrice24Hr = (price: number, low_24h: number, high_24h: number) => {
  const percentPrice = ((price - low_24h) / (high_24h - low_24h)) * 100;
  if (percentPrice > 100) return 100;
  return percentPrice;
};

const CoinContainer = (props: any) => {
  return (
    <div className=" border-b border-gray-400">
      <div className="mx-5 items-center justify-between h-14 gap-x-3  grid grid-cols-9">
        <div className="ml-3 flex space-x-4 items-center">
          <Image src={props.image} alt={props.id} width={30} height={30} />
          <div>{props.symbol.toUpperCase()}</div>
        </div>
        <div>{props.name}</div>
        <div>
          $ {props.price > 1 ? props.price.toLocaleString() : props.price}
        </div>
        <div className="justify-self-end">{props.low_24h}</div>
        <div className=" col-span-2">
          <ProgessBar
            percent={currentPrice24Hr(
              props.price,
              props.low_24h,
              props.high_24h
            )}
          />
        </div>
        <div>{props.high_24h}</div>

        <div>${props.marketcap.toLocaleString()}</div>
        <div className="justify-self-center ml-8">
          {props.priceChange < 0 ? (
            <div className="text-red-600">{props.priceChange.toFixed(2)}%</div>
          ) : (
            <div className="text-green-600">
              {props.priceChange.toFixed(2)}%
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoinContainer;
