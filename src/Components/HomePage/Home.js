/** @format */

import React, { useContext } from "react";
import AboutCompnay from "../AboutCompnay";
import BusinessSummery from "../BusinessSummery";
import Contact from "../Contact";
import { MyContext } from "../Pages/Purchase";
import Review from "../Review/Review";
import Banner from "./Banner";
import Produt from "./Produt/Produt";

const Home = () => {
  const value = useContext(MyContext);
  const [setOrder] = value;
  
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
