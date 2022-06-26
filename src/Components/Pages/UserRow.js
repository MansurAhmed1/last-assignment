/** @format */

import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const { email, role,_id } = user;
  const makeAdmin = () => {
    fetch(`https://secret-journey-33210.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };

  const handleDelete = (id) => {
    const procced = window.confirm("Are You sure Want to delete this book?");
    if (procced) {
      const url = `https://secret-journey-33210.herokuapp.com/user/${id}`;
      fetch(url, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {});
    }
  };
  


  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} class="btn btn-xs">
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
