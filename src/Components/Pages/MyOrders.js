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
      const url = `https://secret-journey-33210.herokuapp.com/delete/${id}`;
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
      fetch(`https://secret-journey-33210.herokuapp.com/order?email=${email}`)
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
                      class="btn btn-accent btn-sm bg-orange-600 hover:bg-orange-600 rounded-none text-black  "
                    >
                      delete
                    </button>
                  </td>

                  <td>
                    {order.paid ? (
                      <button className="btn btn-sm rounded-none bg-black text-white">
                        paid
                      </button>
                    ) : (
                      <Link
                        className="btn  rounded-none btn-sm  bg-green-400 hover:bg-green-400 text-black "
                        to={`/payment/${order?._id}`}
                      >
                        <button className="">PAY</button>
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
