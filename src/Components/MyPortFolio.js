/** @format */

import React from "react";

const MyPortfolio = () => {
  return (
    <div className=" grid gird-cols-1 h-screen justify-center items-center lg:grid-cols-2   mt-0  mx-5">
      <div className="flex justify-center pt-12 py-6 lg:py-16  items-center">
        <img
          className="rounded-full"
          style={{ width: "50%", maxHeight: "290px" }}
          src="https://i.ibb.co/PcsQyH8/93419722-835510646953825-4028136783379169280-n.jpg"
          alt=""
        />
      </div>

      <div className="font-semibold  pb-12 px-4 lg:px-0 py-6 lg:py-12 text-black  text-left text-lg">
        <p className="py-1">Name:Mansur Ahmed</p>
        <p className="py-1">Email:mansurahmed75236@gmail.com</p>
        <p className="py-1">Education:Honours Secend Year (bangla)</p>
        <p className="py-1 underline"> My webdevolopment skill: </p>{" "}
        <ul className="list-disc px-8">
          <li>1.HTML</li>
          <li>2.CSS</li>
          <li>3.BOOTSTRAP</li>
          <li>4.TAILWIND</li>
          <li>5.JAVA SCRIPT</li>
          <li>6.REACT</li>
        </ul>
        <p className="py-1"></p>
      </div>
    </div>
  );
};

export default MyPortfolio;
