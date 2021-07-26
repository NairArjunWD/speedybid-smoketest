import React from "react";
import Footer from "../../components/Footer";
import Features from "../../components/LandingPageComponents/Features";
import Header from "../../components/LandingPageComponents/Header";
import Newsletter from "../../components/LandingPageComponents/NewsLetter";

const Homepage = () => {
  return (
    <>
      <Header />
      <Features />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Homepage;
