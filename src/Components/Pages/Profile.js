/** @format */

import React from "react";

const Profile = ({ profile, setToggle, toggle }) => {
  const { name, email, image, address, education, linkdin, _id } = profile;

  const handleDelete = (id) => {
    const url = `https://secret-journey-33210.herokuapp.com/deleteprofile/${id}`;
    fetch(url, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className=" grid gird-cols-1  justify-center items-center lg:grid-cols-2   mt-0  mx-5">
      <div className="flex justify-center pt-12 py-6 lg:py-16  items-center">
        <img
          className="-mt-14"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            border: "1px solid gray"
          }}
          src={image}
          alt=""
        />
      </div>

      <div className="font-semibold  pb-11 px-4 lg:px-0 py-6 lg:py-12 text-black text-lg">
        <p className="py-1">{name}</p>

        <p className="py-1">{email}</p>
        <p className="py-1">{education}</p>
        <p className="py-1">{address}</p>
        <p className="py-1"> <a href={linkdin}>{linkdin}</a> </p>
        <div className="flex justify-end  mt-24">
          <button
            onClick={() => {
              setToggle(!toggle);
              handleDelete(_id);
            }}
            className="btn btn-sm bg-slate-800 mr-5 text-white "
          >
            UPDATE PROFILE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
