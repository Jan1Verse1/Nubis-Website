import React, { useEffect } from "react";
import Header from "../Components/Header";
import CorpHero from "../Components/CorpHero";
import Partnership from "../Components/Partnership";
import JoinCorp from "../Components/JoinCorp";
import Footer from "../Components/TheFooter";

const NubisCorp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <CorpHero />
      <Partnership />
      <JoinCorp />
      <Footer />
    </>
  );
};

export default NubisCorp;
