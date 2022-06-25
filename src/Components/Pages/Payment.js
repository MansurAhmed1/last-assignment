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
  const url = ` http://localhost:5000/pay/${id}`;

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
    <div>
      <div className="flex justify-center">
        <div
          class="card max-w-md bg-base-100 shadow-xl my-12"
          style={{ width: "80%" }}
        >
          <div class="card-body  mx-auto">
            <p className="text-success font-bold">Hello {user?.displayName}</p>
            <h2 class="card-title">Please Pay for{pay?.name} </h2>
            <p>
              <p className="text-orange-700">
                Please pay: $ {pay.productPrice}
              </p>
              <span></span>
            </p>
            <p></p>
          </div>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md mx-auto  shadow-2xl bg-base-100">
        <div class="card-body ">
          <Elements stripe={stripePromise}>
            <CheckoutForm pay={pay} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
