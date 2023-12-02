import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Footer from "../Components/TheFooter";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        Home <h1>This is the home page</h1>
      </div>
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
