/** @format */

import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="lg:grid  flex  flex-col-reverse lg:grid-cols-2 grid-cols-1 w-11/12 mx-auto py-5">
      <div className="px-5 bannermain ">
        <h1 className="lg:text-4xl text-2xl text-black font-bold mt-8 lg:mt-12">
          <span className=""> Your</span> next manufacturer
        </h1>
        <h1 className="lg:text-4xl text-2xl text-primary font-bold mt-1">
          Your safe future
        </h1>
        <p className="py-4 text-justify text-black ">
          Good Machinery will make your future very beautiful. You do not have
          to buy the Machinery again and again. So you can save your money and
          get a good Machinery at a lower price.You will find all kinds of BK
          pages on our website very easily. If there is a problem with any
          equipment within 2 months, we will at least replace it. You will not
          get this opportunity anywhere else.We arrange our products to reach
          our customers as soon as possible. You can see all our products here
          if you want. Order the necessary equipment now without delay. We are
          ready to serve you.
        </p>
        <button className="btn bg-primary text-black lg:px-6 px-16 rounded-none  hover:bg-white hover:text-black  hover:border-black">
          See Products
        </button>
      </div>
      <div className="flex justify-center lg:items-end  items-center">
        <img
          className=" lg:ml-5 bannerImage"
          src="https://www.treehugger.com/thmb/JSTt1tufZDnt10foyfqLInLgyKQ=/1000x668/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__treehugger__images__2016__12__monday-motorbikes-m1-c5e6c59d20854aa2926408ea9ddedc52.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;

// <div
//   id="controls-carousel"
//   class="relative "
//   data-carousel="static"
//   style={{ height: "88vh" }}
// >
//   {/* <!-- Carousel wrapper --> */}
//   <div className=" duration-700 ease-in-out   overflow-hidden relative h-full">
//     {/* <!-- Item 1 --> */}
//     <div
//       className="hidden duration-700 ease-in-out h-full"
//       data-carousel-item
//     >
//       <div className="hero h-full bg-zinc-900 text-white">
//         <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center w-11/12 mx-auto">
//           <img
//             src="https://media.istockphoto.com/photos/retro-motorcycle-mechanic-picture-id1087017528?k=20&m=1087017528&s=612x612&w=0&h=5tXE6zRlIXyuvbD_5QofCpTpjxkFPP_qNCt7UFDqXhg="
//             class="w-3/5 max-w-sm rounded-lg shadow-2xl "
//             alt=""
//           />
//          <div>
//             <h1 className=" text-xl lg:text-5xl  font-bold">Bike Instrumental Here!</h1>
//             <p className="my-6 text-lg text-dark">
//              Our maket place is very popular bike instrumental market place.you wil get all parts of any bike.
//             </p>
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* <!-- Item 2 --> */}
//     <div class=" h-full " data-carousel-item="active">
//       <div className="hero h-full bg-base-200  ">
//         <div className="hero-content flex-col lg:flex-row-reverse w-11/12  justify-center items-center  mx-auto">
//           <img
//             src="https://media.istockphoto.com/photos/man-in-the-garage-is-checking-a-motorcycle-picture-id1363985678?k=20&m=1363985678&s=612x612&w=0&h=x2UlWVe6lCmKb8FfoSbFwQarHsgECNT2MuzhCwPfqTs="
//             class="w-3/5 max-w-sm   rounded-lg shadow-2xl"
//             alt=""
//           />
//           <div>
//             <div className="text-center">
//             <h1 className="text-2xl lg:text-5xl   font-bold">Bike Instrumental Here!</h1>
//             <p className="py-6 text-lg text-dark" >
//              Our maket place is very popular bike instrumental market place.you wil get all parts of any bike.
//             </p>
//             <button className="btn btn-primary ">Get Started</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* <!-- Item 3 --> */}
//     <div class="hidden duration-700 ease-in-out" data-carousel-item>
//       <div class="hero h-full bg-base-200 ">
//         <div class="hero-content flex-col lg:flex-row-reverse w-11/12  justify-center items-center  mx-auto">
//           <img
//             src="https://media.istockphoto.com/photos/stylish-vintage-hobby-motorcycle-garagewoman-at-work-picture-id1091320154?k=20&m=1091320154&s=612x612&w=0&h=cmCLVbC2cjjOoFxotEX29lL_0NsR3D9Z5kZhGsj0ND0="
//             class="w-3/5 rounded-lg shadow-2xl"
//             alt=""
//           />
//            <div>
//             <h1 className="text-2xl lg:text-5xl  font-bold">Bike Instrumental Here!</h1>
//             <p className="py-6 text-lg text-dark">
//              Our maket place is very popular bike instrumental market place.you wil get all parts of any bike.
//             </p>
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* <!-- Item 4 --> */}
//     <div class="hidden duration-700 ease-in-out" data-carousel-item>
//       <div class="hero h-full bg-base-200 ">
//         <div class="hero-content flex-col lg:flex-row-reverse w-11/12  justify-center items-center  mx-auto">
//           <img
//             src="https://media.istockphoto.com/photos/african-mechanical-engineer-doing-maintenance-the-robotic-welding-picture-id1325058982?k=20&m=1325058982&s=612x612&w=0&h=BMHNChoGV8dVhhKMMtusSspGiGrYW8GIGWlnZTOS3RU="
//             class="w-3/5 rounded-lg shadow-2xl"
//             alt=""
//           />
//            <div>
//             <h1 className="text-2xl lg:text-5xl font-bold">Bike Instrumental Here!</h1>
//             <p className="py-6 text-lg text-dark">
//              Our maket place is very popular bike instrumental market place.you wil get all parts of any bike.
//             </p>
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </div>
//       </div>{" "}
//     </div>
//     {/* <!-- Item 5 --> */}
//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//       <div className="hero h-full bg-base-200 ">
//         <div className="hero-content flex-col lg:flex-row-reverse w-11/12  justify-center items-center  mx-auto">
//           <img
//             src="https://media.istockphoto.com/photos/walking-robot-motorcycle-picture-id1381016456?k=20&m=1381016456&s=612x612&w=0&h=LphSfcnJAIAEkn9XyD7A3yc7HTnuObWXRuNb7tt7Knw="
//             class="w-3/5 rounded-lg shadow-2xl"
//             alt=""
//           />
//           <div>
//             <h1 className="text-2xl lg:text-5xl  font-bold">Bike Instrumental Here!</h1>
//             <p className="py-6 text-lg text-dark">
//              Our maket place is very popular bike instrumental market place.you wil get all parts of any bike.
//             </p>
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </div>
//       </div>{" "}
//     </div>
//   </div>
//   {/* <!-- Slider controls --> */}
//   <button
//     type="button"
//     class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
//     data-carousel-prev
//   >
//     <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//       <svg
//         class="w-6 h-6 text-white dark:text-gray-800"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="2"
//           d="M15 19l-7-7 7-7"
//         ></path>
//       </svg>
//       <span className="hidden">Previous</span>
//     </span>
//   </button>
//   <button
//     type="button"
//     class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
//     data-carousel-next
//   >
//     <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//       <svg
//         class="w-6 h-6 text-white dark:text-gray-800"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="2"
//           d="M9 5l7 7-7 7"
//         ></path>
//       </svg>
//       <span className="hidden">Next</span>
//     </span>
//   </button>
// </div>
