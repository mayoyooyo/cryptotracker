import Head from "next/head";
import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Head>
        <title>mayo crypto</title>
      </Head>
      <NavBar />
      <div className=" bg-mayo3 min-h-screen">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
