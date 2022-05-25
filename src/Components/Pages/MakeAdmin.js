/** @format */

import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

import UserRow from "./UserRow";


const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
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
      {/* <h2 className="text-2xl my-6 font-semibold text-center">
      all user{users.length}
      </h2> */}
      {/* <button class="btn gap-2">
  All user
  <div class="badge">{users.length}</div>
</button> */}



      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>user</th>
              <th>Make admin</th>
              <th>remove user</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user._id} user={user} refetch={refetch}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;