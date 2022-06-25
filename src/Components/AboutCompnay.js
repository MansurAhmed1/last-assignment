/** @format */

import React from "react";
// import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
 
} from "recharts";
const AboutCompnay = () => {
  const data = [
    {
      month: "Mar",
      investment: 10000,
      sell: 241222,
      revenue: 10401
    },
    {
      month: "Apr",
      investment: 20000,
      sell: 4233333,
      revenue: 24500
    },
    {
      month: "May",
      investment: 50000,
      sell: 726109,
      revenue: 67010
    },
    {
      month: "Jun",
      investment: 50000,
      sell: 529973,
      revenue: 40405
    },
    {
      month: "Jul",
      investment: 60000,
      sell: 601333,
      revenue: 50900
    },
    {
      month: "Aug",
      investment: 70000,
      sell: 670333,
      revenue: 61000
    }
  ];
  return (
    <div className="shadow-lg mb-24 pb-6 my-36">
      <h1 className=" mt-24 text-4xl pb-16 font-bold text-center text-black">
        About Our Company
      </h1>

      <div className="grid w-11/12 mx-auto   grid-cols-1 md:grid-cols-2 ">
        <div className=" text-justify ">
          <h1 className="text-2xl text-black">
            We are leading company in this field, We provide specific solutions
            for our every customers.
          </h1>
          <div className="py-4">
            When you give to Our Charity, know your donation is making a
            difference Whether you are supporting one our Signature Programs or
            our carefully curated list of Gifts That Give More, our professional
            staff. Manufactory partner with over 320 amazing projects worldwide,
            and have given over $150 million product.
          </div>
          <div>
            We partner with over 320 amazing ut projects worldwide, and have
            given over $150 million in cash and product grants to other groups.
          </div>
          <div className="pt-4">
            <button className="btn  text-black rounded-none hover:bg-white bg-primary">
              More About Us
            </button>
          </div>
        </div>
        <div className="pl-3 flex justify-center items-center">
          <BarChart className="ml-5" width={450} height={350} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            {/* <YAxis /> */}
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="black" />
            <Bar dataKey="sell" fill="#0ec2dd" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default AboutCompnay;
