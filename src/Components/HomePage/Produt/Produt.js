/** @format */

import React, { useEffect, useState } from "react";
import ProductCard from "../../ProductCard";
import Loading from "../../Shared/Loading";
const Produt = () => {
  const [services, setServices] = useState([]);

  const [loading,setLoading]=useState(true)
  useEffect(() => {
    fetch("https://secret-journey-33210.herokuapp.com/service")
      .then((res) => res.json())
      .then(data=>{setServices(data.slice(0,5))
        setLoading(false)
      })
   
  }, [services]);
  if(loading){
    return <Loading></Loading>
  }
  return (
    <div className=" mb-36 mt-12">
      <h1 className="lg:text-4xl text-2xl  text-center py-12 font-bold">
        Our Product
      </h1>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-10/12 mx-auto">
        {services.map((service, index) => (
          <ProductCard key={index} service={service}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Produt;
