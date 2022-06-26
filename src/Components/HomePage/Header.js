// /** @format */

// import { signOut } from "firebase/auth";
// import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";

// import auth from "../firebase.init";
// import CustomLink from "../../CustomLink/CustomLink";


// const Header = () => {
// const [user]=useAuthState(auth)

//   const logout = () => {
//     signOut(auth);
//     localStorage.removeItem("accessToken");
//   };
//   return (
//     <div className="bg-neutral-900 ">
//       <nav className=" border-gray-200 px-2 sm:px-4  py-3 rounded dark:bg-gray-800">
//         <div className="container  flex flex-wrap  justify-between items-center mx-auto">
//           <button
//             style={{ width: "15px" }}
//             class="flex mr-3 text-sm lg:hidden rounded-full  md:mr-0 dark:focus:ring-gray-600 focus:ring-4 focus:ring-gray-300"
//             id="user-menu-button"
//             aria-expanded="false"
//             type="button"
//             data-dropdown-toggle="dropdown"
//           >
//             <span className="sr-only">Open user menu</span>

//             <label
//               for="my-drawer-2"
//               tabindex="0"
//               class=" btn-ghost  drawer-button btn btn-xs "
//             >
//               <img
//                 src="https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Dot-More-Option-Menu-512.png"
//                 style={{ width: "25px" }}
//                 alt=""
//               />
//             </label>
//           </button>

//           <a href="https://flowbite.com" className="flex items-center ">
//             <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
//               Bike Instrument
//             </span>
//           </a>

//           <div className="flex bg-neutral-800 lg:hidden items-center md:order-2">
//             <button
//               data-collapse-toggle="mobile-menu-2"
//               type="button"
//               class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg  md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="mobile-menu-2"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 class="w-6 h-6"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                   clip-rule="evenodd"
//                 ></path>
//               </svg>
//               <svg
//                 class="hidden w-6 h-6"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                   clip-rule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//           <div
//             class="hidden justify-items-end    items-center w-full md:flex md:w-auto md:order-1"
//             id="mobile-menu-2"
//           >
//             <ul className="flex flex-col items-center  text-base mt-4 md:flex-row md:space-x-8 md:mt-0  md:font-medium">
//               <li>
//                 <CustomLink to={"/"}>Home</CustomLink>
//               </li>
//               <li>
//                 <CustomLink to={"/portfolio"}>Portfolio</CustomLink>
//               </li>
//               <li>
//                 <CustomLink to={"/blog"}>Blog</CustomLink>
//               </li>
//               {/* <li>
//                 <Link to={""}>Purchase</Link>
//               </li> */}


//               {user && (
//                 <li>
//                   <CustomLink to="/dashboard">Dashboard</CustomLink>
//                 </li>
//               )}
//               <li>
//                 {user ? (
//                   <button className="btn " onClick={logout}>
//                     Sign Out
//                   </button>
//                 ) : (
//                   <CustomLink to="/login">Login</CustomLink>
//                 )}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;


import React, {useState} from 'react';
import menuIcon from '../../image/image/menuIcon3.png'
import crossIcon from '../../image/image/CrossIcon3.png'
import { signOut } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../firebase.init";
import CustomLink from "../../CustomLink/CustomLink";
const Header = () => {
  const [user]=useAuthState(auth)

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const [navTrigger,setNavTrigger]=useState(false)
  console.log(navTrigger)
  // pb-4
  return (
    <header style={{borderBottom:"1px solid black"}} className=' py-6 bg-white  sticky top-0 z-30 '>
    <nav className=' w-11/12 mx-auto relative lg:px-1 px-5 '>
        <div className='flex justify-between items-center'>
            <div className='navLeft '>
        
  
              <img className='h-6 w-44' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTcbehD5dhPR3c2dpf1Ei92D8AAp4zrhJYt6Tc06tF1BwYYgxVg-cp6zHIooNprk-Ezg&usqp=CAU" alt='' />
 

            </div>
            <div className='navRight'>
               <div className=' hidden lg:block '>
               <div className='flex '>
               <CustomLink className='mx-2 px-2 py-1  text-black  headerAnchor ' to={"/"}>Home</CustomLink>
               <CustomLink className='mx-2 px-2 py-1   text-black  headerAnchor' to={"/portfolio"}>Portfolio</CustomLink>
               <CustomLink className='mx-2 px-2 py-1  text-black  headerAnchor ' to={"/blog"}>Blog</CustomLink>
               {user && (
          
                  <CustomLink className='mx-2 px-2 py-1  text-black headerAnchor  ' to="/dashboard">Dashboard</CustomLink>
         
              )}
              {user ? (
                  <button className="btn signOutButton border  ml-3 border-white text-white bg-slate-800 hover:text-slate-800 hover:bg-white  inline-block px-3 py-2  rounded-none  btn-sm" onClick={logout}>
                    Sign Out
                  </button>
                ) : (
                  <CustomLink className='mx-2 px-2 py-1  headerAnchor  ' to="/login">Login</CustomLink>
                )} 
               </div>
              
                 
               </div>
               <div className='block toggleButton lg:hidden w-8 h-8' onClick={()=>{
                setNavTrigger(!navTrigger)

               }}>
                <img  src={navTrigger ? crossIcon : menuIcon } className='w-8 h-8 ' alt="menuicon" />
               </div>
            </div>
        </div >
        <div  className={`smallMenu block z-40 lg:hidden pb-5  bg-white w-full absolute left-0 top-16 ${navTrigger?'block':'hidden'}  `} >
            <div className='grid grid-cols-1 gap-y-6 text-center'>
            <CustomLink className='mx-2 px-2 py-2 text-lg headerAnchor ' to={"/"}>Home</CustomLink>
               <CustomLink className='mx-2 px-2 py-2 text-lg headerAnchor ' to={"/portfolio"}>Portfolio</CustomLink>
               <CustomLink className='mx-2 px-2 py-2 text-lg headerAnchor ' to={"/blog"}>Blog</CustomLink>
               {user && (
          
                  <CustomLink className='mx-2 px-2 py-2 text-lg headerAnchor ' to="/dashboard">Dashboard</CustomLink>
         
              )}
              {user ? (
            <button className="btn mx-4 signOutButton border border-white text-white bg-slate-800 hover:text-slate-800 hover:bg-white  inline-block px-3 py-2  rounded-none  btn-sm" onClick={logout}>
            Sign Out
          </button>
                ) : (
                  <CustomLink className='mx-2 px-2 py-2 text-lg headerAnchor ' to="/login">Login</CustomLink>
                )} 

            </div>

        </div>
    </nav>
   </header>
  );
};

export default Header;


