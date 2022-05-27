/** @format */

import React, { useContext } from "react";
import AboutCompnay from "../AboutCompnay";
import BusinessSummery from "../BusinessSummery";
import Contact from "../Contact";

import Review from "../Review/Review";
import Banner from "./Banner";
import Produt from "./Produt/Produt";

const Home = () => {
  
  
  return (
    <div>
      <Banner></Banner>
      <Produt></Produt>

      <BusinessSummery></BusinessSummery>
      <AboutCompnay></AboutCompnay>
      <Review></Review>
      <Contact></Contact>
    </div>
  );
};

export default Home;
