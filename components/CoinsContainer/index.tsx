import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { usePageContext } from "../../contexts/pageProvider";
import CoinList from "../CoinContainer/CoinList";
import CoinHeader from "../CoinHeader";

const CoinsContainer = ({ search, filteredCoins }: any) => {
  const [allCoins, setAllCoins] = useState(filteredCoins);
  const { currentPage } = usePageContext();

  const coins = useMemo(
    () =>
      allCoins.filter(
        (coin: { name: string; symbol: string }) =>
          coin.name.toLowerCase().includes(search.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(search.toLowerCase())
      ),
    [allCoins, search]
  );

  const getCoins = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 10,
          page: currentPage,
          price_change_percentage: "24h",
        },
      }
    );

    setAllCoins(res.data);
  };

  useEffect(() => {
    window.scroll(0, 0);
    getCoins();
    const interval = setInterval(() => {
      getCoins();
    }, 60000);
    return () => clearInterval(interval);
  }, [currentPage]);

  return (
    <div className=" max-w-6xl m-auto bg-mayo4 rounded-md mt-5 py-1 shadow-md shadow-slate-900 ">
      <CoinHeader />
      <CoinList filteredCoins={coins} />
    </div>
  );
};

export default CoinsContainer;
