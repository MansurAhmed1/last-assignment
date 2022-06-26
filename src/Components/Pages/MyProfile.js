/** @format */

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import auth from "../firebase.init";
import Profile from "./Profile";

const MyProfile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const [user] = useAuthState(auth);

const [toggle, setToggle] = useState(true);
console.log(toggle);
//// //////////////imgbb api key////////////////////
const imageStorageKey = "4295ac4d47b569312bea67b440cdbdbb";
//// //////////////imgbb api key////////////////////

const onSubmit = async (data) => {
  const image = data.image[0];
  const formData = new FormData();
  formData.append("image", image);

  const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
  fetch(url, {
    method: "POST",
    body: formData
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.success) {
        const img = result.data.url;

        const profile = {
          email: user?.email,
          image: img,
          address: data.address,
          education: data.education,
          linkdin: data.linkdin,
          name: user?.displayName
        };

        const url = "https://secret-journey-33210.herokuapp.com/profile";
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
          },
          body: JSON.stringify(profile)
        })
          .then((res) => res.json())
          .then((inserted) => {
            if (inserted.insertedId) {
              toast("Profile added successfully");
              reset();
            } else {
              toast("Failed to add the Profile");
            }
          });
      }
    });
};

const [profileData, setProfileData] = useState([]);
useEffect(() => {
  const email = user?.email;
  fetch(`https://secret-journey-33210.herokuapp.com/profile?email=${email}`)
    .then((res) => res.json())
    .then((data) => setProfileData(data));
}, [user, profileData, profileData.length]);
console.log(profileData.length);
return (
  <div className="">
    {profileData.length < 1 ? (
      <div className="mb-14">
       
        <h2 className="text-2xl text-center font-semibold pt-6">
          Add Your Profile
        </h2>
        <div className="flex justify-center items-center">
          <form
            style={{ width: "60%" }}
            className=""
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered w-full "
                value={user?.displayName}
                disabled
                {...register("name ", {})}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
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
                value={user?.email}
                disabled
                {...register("email ", {})}
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
                <span className="label-text">Education</span>
              </label>
              <input
                type="text"
                placeholder="Enter Product Price"
                className="input input-bordered w-full "
                {...register("education", {
                  required: {
                    value: true,
                    message: "Education is Required"
                  }
                })}
              />
              <label className="label">
                {errors.education?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.education.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Address"
                className="input input-bordered w-full "
                {...register("address", {
                  required: {
                    value: true,
                    message: "address is Required"
                  }
                })}
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.address.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Linkdin Profile</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Linkdin Profile"
                className="input input-bordered w-full "
                {...register("linkdin", {})}
              />
              <label className="label">
                {errors.linkdin?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.linkdin.message}
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

            <input
              className="btn w-full   hover:bg-stone-700 text-white"
              type="submit"
              value="Add Profile"
            />
          </form>
        </div>
      </div>
    ) : (
      <div>
        <h2 className="text-2xl text-center font-semibold pt-6">My Profile</h2>
        {profileData.map((profile, index) => (
          <Profile
            key={index}
            profile={profile}
            setToggle={setToggle}
            toggle={toggle}
          ></Profile>
        ))}
      </div>
    )}
  </div>
);
};

export default MyProfile;
