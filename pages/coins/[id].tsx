import { useRouter } from "next/router";
import React from "react";
import CoinDetailsContainer from "../../components/CoinDetailsContainer";
import Layout from "../../components/Layout";

const CoinDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <CoinDetailsContainer id={id} />
    </Layout>
  );
};

export default CoinDetails;
