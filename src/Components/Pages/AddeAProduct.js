
/** @format */

import React from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import auth from "../firebase.init";




const AddeAProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const [user] = useAuthState(auth);


  //// //////////////imgbb api key////////////////////
  const imageStorageKey = "4295ac4d47b569312bea67b440cdbdbb";
  //// //////////////imgbb api key////////////////////


  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    //img bb er example call theke nichi
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;

          const addProduct = {
            name: data.ProductName,
            email: user?.email,
            price: data.price,
            image: img,
            avaialbequantit: data.quantity,
            minimumquantity: data.minimumQuantity,
            description: data.description
          };

          // send to your database

          const url = "https://secret-journey-33210.herokuapp.com/added";
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(addProduct)
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast("Product added successfully");
                reset();
              } else {
                toast("Failed to add the Product");
              }
            });
        }
      });
  };

  return (
    <div className="mb-44">
     
      <h2 className="text-2xl text-center font-semibold pt-6">
        Added Your Product
      </h2>
      <div className="flex justify-center items-center">
        <form
          style={{ width: "60%" }}
          className=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control w-full  ">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Product Name"
              className="input input-bordered w-full "
              {...register("ProductName ", {
                required: {
                  value: true,
                  message: "Product Name  is Required"
                }
              })}
            />
            <label className="label">
              {errors.ProductName?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.ProductName.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full  ">
            <label className="label">
              <span className="label-text">Enter Your Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="input input-bordered w-full "
              {...register("email ", {
                required: {
                  value: "true",
                  message: "Email is Required"
                }
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <input
              type="number"
              //    value={user?.email}

              placeholder="Enter Product Price"
              className="input input-bordered w-full "
              {...register("price", {
                required: {
                  value: true,
                  message: "Product Price is Required"
                }
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Available Quantity </span>
            </label>
            <input
              type="number"
              //    value={user?.email}

              placeholder="Enter Quantity"
              className="input input-bordered w-full "
              {...register("quantity", {
                required: {
                  value: true,
                  message: "Quantity is Required"
                }
              })}
            />
            <label className="label">
              {errors.quantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.quantity.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Minimum Order Quantity</span>
            </label>
            <input
              type="number"
              //    value={user?.email}

              placeholder="Enter Minimum Product Quantity"
              className="input input-bordered w-full "
              {...register("minimumQuantity", {
                required: {
                  value: true,
                  message: "Minimum Quantity is Required"
                }
              })}
            />
            <label className="label">
              {errors.minimumQuantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.minimumQuantity.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full "
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required"
                }
              })}
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Product Description</span>
            </label>
            <input
              type="text"
              //    value={user?.email}

              placeholder="Enter Product Description"
              className="input input-bordered w-full "
              {...register("description", {
                required: {
                  value: true,
                  message: "description is Required"
                }
              })}
            />
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="btn w-full   hover:bg-stone-700 text-white"
            type="submit"
            value="conform order"
          />
        </form>
      </div>
    </div>
  );
};

export default AddeAProduct;





















