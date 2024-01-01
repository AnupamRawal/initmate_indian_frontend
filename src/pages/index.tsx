import React from "react";
import PageLayout from "@/components/pageLayout";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Intimate Indian</title>
        <meta name="description" content="intimate indian" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout></PageLayout>;
    </>
  );
};

export default Home;
