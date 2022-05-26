/** @format */

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../firebase.init";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  

  const handleShipped = (id) => {
    const updateOrder = {
      shipped: true,
      pending: false
    };
    const url = `http://localhost:5000/order/update/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updateOrder)
    })
      .then((res) => res.json())
      .then((result) => {
     
      });
  };


  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user, orders]);


  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
              <th>Painding </th>
              <th>Ship Now </th>
              <th>Shipped </th>
              <th>payment </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <th>{order.name}</th>
                  <td>{order.productPrice}</td>
                  <th>{order.productQuantity}</th>
                  <td>
                    {order.pending && (
                      <span className="text-sm font-semibold">
                        Painding......
                      </span>
                    )}
                  </td>
                  <td>
                    {order.pending ? (
                      <button
                        onClick={() => {
                          handleShipped(order._id);
                        }}
                        class="btn btn-sm"
                      >
                        Ship Now
                      </button>
                    ) : (
                      ""
                    )}
                  </td>
                  <td>
                    {order?.shipped && (
                      <button className="btn btn-sm">Shipped</button>
                    )}
                  </td>

                  <td>
                    {order.paid ? (
                      <button className="btn btn-sm">paid</button>
                    ) : (
                      <span className="text-sm font-semibold">
                        <button className="btn btn-active btn-ghost btn-sm">
                          unpaid
                        </button>
                      </span>
                    )}
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

export default ManageAllOrders;
