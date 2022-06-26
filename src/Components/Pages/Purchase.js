/** @format */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);

  const { id } = useParams();
  const [order, setOrder] = useState(null);
  console.log(id)


  useEffect(() => {
    fetch(`https://secret-journey-33210.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [order, id]);

  console.log(order);

  const [disable, setDisable] = useState(false);
  const handleOnChange = (e) => {
    if (e.target.value >= order?.minimumquantity) {
      setDisable(false);
    } else {
      setDisable(true);
      toast.error(
        "Please enter a value greater than the minimum quantity and less than the minimum quantity"
      );
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const orderValue = {
      name: order.name,
      image: order.img,
      email: user?.email,
      productName: order.name,
      productPrice: order.price,
      productQuantity: e.target.productQuantity.value,
      address: e.target.address.value,
      mobile: e.target.mobile.value
    };

    if (
      e.target.productQuantity.value >= order?.minimumquantity &&
      e.target.productQuantity.value <= order?.avaialbequantit
    ) {
      const url = "https://secret-journey-33210.herokuapp.com/order";
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
        body: JSON.stringify(orderValue)
      })
        .then((res) => res.json())
        .then((inserted) => {
          if (inserted.insertedId) {
            toast("Order successfully");
            e.target.reset();
            // setOrder(null);
          } else {
            toast("Failed to add Order");
            console.log(inserted);
          }
        });
    } else {
      toast.error(
        "Please enter a value greater than the minimum quantity and less than the minimum quantity"
      );
      setDisable(true);
    }
  };

  return (
    <div className=" mb-14 ">
      <h2 className="text-2xl pt-4 text-center font-semibold ">
        CONFORM YOUR ORDER
      </h2>

      <div
        className=" grid lg:grid-cols-2  grid-cols-1 mx-auto "
        style={{ width: "90%" }}
      >
        <div>
          <div
            style={{ border: "1px solid black" }}
            className="card  mt-12 card-side bg-base-100 py-5 d-flex lg:flex-row flex-col border-none rounded-none"
          >
            <img src={order?.image} style={{ height: "250px" }} alt="Movie" />
            <div class="card-body text-left">
              <h2 class="card-title">{order?.name} </h2>
              <h2 class="card-title text-primary">{order?.price} $</h2>
              <div className="font-semibold py-0">
                Avaialbe-Quantity:{order?.avaialbequantit}
              </div>
              <div className="font-semibold py-0">
                Minimum-Quantity:{order?.minimumquantity}
              </div>
              <div className="font-semibold py-0">{order?.description}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center my-4 items-center">
    

            <form
              onSubmit={handleOnSubmit}
              style={{ width: "60%" }}
              action=""
              className="grid grid-cols-1 gap-y-3 "
            >
              <div className="flex  flex-col">
                <label htmlFor="name" className="text-left   mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className=""
                  value={user?.displayName}
                  disabled
                  placeholder="Enter Your  Name"
                  required
                />
              </div>

              <div className=" flex  flex-col">
                <label htmlFor="email" className="text-left  mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user?.email}
                  readOnly
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="poductName" className="text-left mb-1">
                  Product Name
                </label>
                <input
                  id="poductName"
                  type="text"
                  name="poductName"
                  value={order?.name}
                  disabled
                  required
                  placeholder="Enter Your Prodcut Name"
                />
              </div>
              <div className=" flex flex-col">
                <label htmlFor="productPrice" className="text-left mb-1">
                  Product Price
                </label>
                <input
                  id="productPrice"
                  type="number"
                  name="productPrice"
                  value={order?.price}
                  disabled
                  required
                  placeholder="Enter Your Product Price "
                />
              </div>
              <div className="flex  flex-col">
                <label htmlFor="productQuantity" className="text-left mb-1">
                  Product Quantity
                </label>
                <input
                  id="productQuantity"
                  type="number"
                  name="productQuantity"
                  defaultValue={order?.minimumquantity}
                  onChange={handleOnChange}
                  required
                  placeholder="Enter Your Prodcut Quantitu Name"
                />
              </div>
              <div className="flex  flex-col">
                <label htmlFor="mobile" className="text-left mb-1">
                  Mobile
                </label>
                <input
                  id="mobile"
                  type="tel"
                  name="mobile"
                  placeholder="Enter Your Phone Number"
                  required
                />
              </div>
              <div className="flex  flex-col">
                <label htmlFor="address" className="text-left">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Enter Your Address"
                  required
                />
              </div>
              <input
                disabled={disable}
                className="btn w-full btn-primary bg-stone-700  hover:bg-stone-700 text-white"
                type="submit"
                value="CONFORM ORDER"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
