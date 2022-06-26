/** @format */

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L16IdH3ABg5CYYKeTJglHGxUrASRWeROVrt0Z08jPpuBB7KkOcL8dMJaRIcum9UbROYeRNscMIb7ecbCRG87dsw00kJXUgbZ1"
);

const Payment = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const url = `https://secret-journey-33210.herokuapp.com/pay/${id}`;

  const { data: pay, isLoading } = useQuery(["pay", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="h-screen">
      <div className="flex justify-center">
        <div
          class="card max-w-md bg-base-100 border border-black rounded-none my-12"
          style={{ width: "80%" }}
        >
          <div class="card-body  rounded-none ">
            <p className="text-primary text-2xl font-bold">
              Hello {user?.displayName}
            </p>
            <h2 class="card-title">Please Pay for{pay?.name} </h2>
            <p>
              <p
                className=" text-red-600
              "
              >
                Please pay: $ {pay.productPrice}
              </p>
              <span></span>
            </p>
            <p></p>
          </div>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md mx-auto border border-black rounded-none shadow-2xl bg-base-100">
        <div class="card-body  ">
          <Elements stripe={stripePromise}>
            <CheckoutForm pay={pay} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
