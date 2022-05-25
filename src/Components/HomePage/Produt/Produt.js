/** @format */

import React, { useEffect, useState } from "react";
import ProductCard from "../../ProductCard";

const Produt = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);
  return (
    <div className=" mb-36 mt-20">
      
      <h1 className="text-3xl  text-center py-12 font-bold">Our Product</h1>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-10/12 mx-auto">
        {services.map((service, index) => (
          <ProductCard key={index} service={service}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Produt;