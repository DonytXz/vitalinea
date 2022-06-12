import React from "react";
import { Header, Footer } from "../components/shared";
import { Hero, Nutrimental, Products } from "../components/Home";

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <Nutrimental />
        <Products />
        <Footer />
      </div>
    </>
  );
};

export default Home;
