import React from "react";
import About from "../../Components/About";
import Banner from "../../Components/Banner";
import Services from "../../Components/Services";
import "./style.css";
const Home = () => {
  return (
    <div className="home-wrapper">
      {/* BANNER START */}
      <Banner />

      {/* SERVICES START */}
      <Services />

      {/* ABOUT START */}
      <About />
    </div>
  );
};

export default Home;
