/** @format */

import React from "react";

const Profile = ({ profile }) => {
  const { name, email, image, address, education, linkdin } = profile;

  return (
    <div
      className=" grid gird-cols-1  justify-center items-center lg:grid-cols-2  shadow-lg mt-0  mx-5"
    >
<div className="flex justify-center pt-12 py-6 lg:py-16  items-center">
<img className="rounded-full" style={{width:"60%",maxHeight:"290px"}}  src={image} alt="" />
</div>

<div className="font-semibold  pb-12 px-4 lg:px-0 py-6 lg:py-12 text-black text-lg">

<p className="py-1">{name}</p>

<p className="py-1">{email}</p>
<p className="py-1">{education}</p>
<p className="py-1">{address}</p>
<p className="py-1">{linkdin}</p>

</div>

    </div>
  );
};

export default Profile;
