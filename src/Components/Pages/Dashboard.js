/** @format */

import React from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import {  Outlet } from "react-router-dom";


import useAdmin from "../hooks/useAdmin";
import CustomLink from "../../CustomLink/CustomLink";

const Dashboard = () => {

 
  const [user]=useAuthState(auth)



  
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content text-left bg-slate-200 ">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side ">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-slate-50 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <CustomLink to="">My Order</CustomLink>
          </li>
          <li>
            <CustomLink to="addreview">Add Review</CustomLink>
          </li>
          <li>
            <CustomLink to="myprofile">My Profile</CustomLink>
          </li>
          {admin && (
            <>
              <li>
                <CustomLink to="addproduct">Add Product</CustomLink>
              </li>
              <li>
                <CustomLink to="manageorder">Manage Order</CustomLink>
              </li>
              <li>
                <CustomLink to="manageproduct">Manage Product</CustomLink>
              </li>
              <li>
                <CustomLink to="makeadmin">Make Admin</CustomLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
