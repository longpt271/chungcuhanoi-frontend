import React from "react";
import MainLayout from "../../components/MainLayout";
import Banner from "./container/Banner";
import Hero from "./container/Hero";
import Articles from "./container/Articles";
import CTA from "./container/CTA";

const HomePage = () => {
  return (
    <MainLayout>
      <Banner />
      <Hero />
      <Articles />
      <CTA />
    </MainLayout>
  );
};

export default HomePage;
