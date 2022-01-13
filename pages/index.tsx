import type { NextPage } from "next";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import Layout from "../components/Layout";
import CoinsContainer from "../components/CoinsContainer";
import axios from "axios";
import Pagination from "../components/Pagination";

const Home: NextPage = ({ filteredCoins }: any) => {
  const [search, setSearch] = useState("");
  const handleChange = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <SearchBar placeholder="Search" onChange={handleChange} />
      <CoinsContainer filteredCoins={filteredCoins} search={search} />
      <Pagination page={1} />

    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets",
    {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 10,
        page: 1,
        price_change_percentage: "24h",
      },
    }
  );
  const filteredCoins = await res.data;

  return {
    props: {
      filteredCoins,
    },
  };
};
export default Home;
