import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import CoinContainer from "../components/CoinContainer";
import CoinList from "../components/CoinContainer/CoinList";
import SearchBar from "../components/SearchBar";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const Home: NextPage = ({ filteredCoins }: any) => {
  const [search, setSearch] = useState("");
  const [allCoins, setAllCoins] = useState(filteredCoins);

  const coins = useMemo(
    () =>
      allCoins.filter(
        (coin: { name: string; symbol: string }) =>
          coin.name.toLowerCase().includes(search.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(search.toLowerCase())
      ),
    [allCoins, search]
  );

  const handleChange = (e: any) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  const fetchCoins = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
    );
    const filteredCoins = await res.json();
    console.log(filteredCoins);

    setAllCoins(filteredCoins);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      fetchCoins();
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" bg-mayo3 min-h-screen">
      <Head>
        <title>mayo crypto</title>
      </Head>
      <div className=" pt-6">
        <SearchBar placeholder="Search" onChange={handleChange} />
      </div>
      <div className=" max-w-6xl m-auto bg-mayo4 rounded-md mt-5 py-1">
        <CoinList filteredCoins={coins} />
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
  );
  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};
export default Home;
