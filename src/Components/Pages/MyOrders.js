/** @format */

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  const handleDelete = (id) => {
    const procced = window.confirm("Are You sure Want to delete this book?");
    if (procced) {
      const url = ` http://localhost:5000/delete/${id}`;
      fetch(url, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {});
    }
  };

  useEffect(() => {
    const email = user?.email;

    if (email) {
      //   fetch(` http://localhost:5000/order?email=${email}`, {
      //     method: "GET",
      //     // headers: {
      //     //   "content-type": "application/json",
      //     //   authorization: `Bearer ${localStorage.getItem("accessToken")}`
      //     // }
      //   })
      fetch(`http://localhost:5000/order?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);
        });
    }
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
              <th>DELETE </th>
              <th>PAYMENT </th>
              <th>transactionId</th>
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
                    <button
                      disabled={order.transactionId}
                      onClick={() => {
                        handleDelete(order._id);
                      }}
                      class="btn btn-sm"
                    >
                      delete
                    </button>
                  </td>

                  <td>
                    {order.paid ? (
                      <button className="btn btn-sm">paid</button>
                    ) : (
                      <Link
                        className="btn btn-sm"
                        to={`/payment/${order?._id}`}
                      >
                        <button>pay</button>
                      </Link>
                    )}
                  </td>
                  <td>{order.transactionId}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
