/** @format */
//https://secret-journey-33210.herokuapp.com/
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
    fetch("https://secret-journey-33210.herokuapp.com/user", {
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
      {/* <h2       className="text-2xl my-6 font-semibold text-center">
      all user{users.length}
      </h2> */}
      {/* <button    className="btn gap-2">
  All user
  <div    className="badge">{users.length}</div>
</button> */}

      <div className="overflow-x-auto">
        <table className="table w-full">
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
