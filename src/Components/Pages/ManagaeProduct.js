/** @format */

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../firebase.init";

const ManagaeProduct = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);
  

  const handleDelete = (id) => {
    const procced = window.confirm("Are You sure Want to delete this book?");
    if (procced) {
      const url = `http://localhost:5000/deleteproduct/${id}`;
      fetch(url, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {
        
          const remaining = products.filter((book) => book._id !== id);
          products(remaining);
        });
    }
  };


  useEffect(() => {
    //   fetch(`http://localhost:5000/order?email=${email}`, {
    //     method: "GET",
    //     // headers: {
    //     //   "content-type": "application/json",
    //     //   authorization: `Bearer ${localStorage.getItem("accessToken")}`
    //     // }
    //   })
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [user, products]);

 

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>product</th>
              <th>Name</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
              <th>DELETE </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="w-8 rounded">
                        <img
                          src={product.image}
                          alt="Tailwind-CSS-Avatar-component"
                        />
                      </div>
                    </div>
                  </td>
                  <th>{product.name}</th>
                  <td>{product.price}</td>
                  <th>{product.avaialbequantit}</th>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(product._id);
                      }}
                      class="btn btn-sm"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagaeProduct;
