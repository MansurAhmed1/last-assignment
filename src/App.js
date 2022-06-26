/** @format */

import { Route, Routes } from "react-router-dom";
import BannerTest from "./Components/BannerTest";

import Footer from "./Components/HomePage/Footer";
import Header from "./Components/HomePage/Header";
import Home from "./Components/HomePage/Home";
import NotFoundPage from "./Components/HomePage/NotFoundPage";
import Login from "./Components/LogIn/Login";
import Register from "./Components/LogIn/Register";
import RequireAdmin from "./Components/LogIn/RequireAdmin";
import RequireAuth from "./Components/LogIn/RequireAuth";
import MyPortFolio from "./Components/MyPortFolio";
import NavbarPractices from "./Components/NavbarPractices";
import AddeAProduct from "./Components/Pages/AddeAProduct";
import AddReview from "./Components/Pages/AddReview";
import Blog from "./Components/Pages/Blog";
import Dashboard from "./Components/Pages/Dashboard";
import MakeAdmin from "./Components/Pages/MakeAdmin";
import ManagaeProduct from "./Components/Pages/ManagaeProduct";
import ManageAllOrders from "./Components/Pages/ManageAllOrders";
import MyOrders from "./Components/Pages/MyOrders";
import MyProfile from "./Components/Pages/MyProfile";
import Payment from "./Components/Pages/Payment";
import Purchase from "./Components/Pages/Purchase";
import Problem from "./Components/Problem";

import Loading from "./Components/Shared/Loading";
import {ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
       <ToastContainer ></ToastContainer>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>

          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>

          <Route path="myorder" element={<MyOrders></MyOrders>}></Route>

          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddeAProduct></AddeAProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageorder"
            element={
              <RequireAdmin>
                <ManageAllOrders></ManageAllOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproduct"
            element={
              <RequireAdmin>
                <ManagaeProduct></ManagaeProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="makeadmin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
        </Route>

        <Route path="/payment/:id" element={<Payment></Payment>}></Route>
        <Route path="/portfolio" element={<MyPortFolio></MyPortFolio>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/navbarpractice"
          element={<NavbarPractices></NavbarPractices>}
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/loading" element={<Loading></Loading>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/bannertest" element={<BannerTest></BannerTest>}></Route>

        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>

        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
