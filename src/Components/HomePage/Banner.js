/** @format */

import React from "react";

const Banner = () => {
  return (
    <div
      id="controls-carousel"
      class="relative "
      data-carousel="static"
      style={{ height: "88vh" }}
    >
      {/* <!-- Carousel wrapper --> */}
      <div className=" duration-700 ease-in-out   overflow-hidden relative h-full">
        {/* <!-- Item 1 --> */}
        <div
          className="hidden duration-700 ease-in-out h-full"
          data-carousel-item
        >
          <div className="hero h-full bg-zinc-900 text-white">
            <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center w-11/12 mx-auto">
              <img
                src="https://media.istockphoto.com/photos/retro-motorcycle-mechanic-picture-id1087017528?k=20&m=1087017528&s=612x612&w=0&h=5tXE6zRlIXyuvbD_5QofCpTpjxkFPP_qNCt7UFDqXhg="
                class="w-3/5 max-w-sm rounded-lg shadow-2xl "
                alt=""
              />
              <div className="">
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  1 Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Item 2 --> */}
        <div class=" h-full" data-carousel-item="active">
          <div className="hero h-full bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse w-11/12  justify-center items-center  mx-auto">
              <img
                src="https://media.istockphoto.com/photos/man-in-the-garage-is-checking-a-motorcycle-picture-id1363985678?k=20&m=1363985678&s=612x612&w=0&h=x2UlWVe6lCmKb8FfoSbFwQarHsgECNT2MuzhCwPfqTs="
                class="w-3/5 max-w-sm   rounded-lg shadow-2xl"
                alt=""
              />
              <div>
                <h1 className="md:text-5xl text-2xl font-bold">
                  Box Office News!
                </h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.2
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Item 3 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <div class="hero h-full bg-base-200 ">
            <div class="hero-content flex-col lg:flex-row-reverse w-11/12  justify-center items-center  mx-auto">
              <img
                src="https://media.istockphoto.com/photos/stylish-vintage-hobby-motorcycle-garagewoman-at-work-picture-id1091320154?k=20&m=1091320154&s=612x612&w=0&h=cmCLVbC2cjjOoFxotEX29lL_0NsR3D9Z5kZhGsj0ND0="
                class="w-3/5 rounded-lg shadow-2xl"
                alt=""
              />
              <div>
                <h1 class="text-5xl font-bold">Box Office News!</h1>
                <p class="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.3
                </p>
                <button class="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Item 4 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <div class="hero h-full bg-base-200 ">
            <div class="hero-content flex-col lg:flex-row-reverse w-11/12  justify-center items-center  mx-auto">
              <img
                src="https://media.istockphoto.com/photos/african-mechanical-engineer-doing-maintenance-the-robotic-welding-picture-id1325058982?k=20&m=1325058982&s=612x612&w=0&h=BMHNChoGV8dVhhKMMtusSspGiGrYW8GIGWlnZTOS3RU="
                class="w-3/5 rounded-lg shadow-2xl"
                alt=""
              />
              <div>
                <h1 class="text-5xl font-bold">Box Office News!</h1>
                <p class="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.4
                </p>
                <button class="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>{" "}
        </div>
        {/* <!-- Item 5 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="hero h-full bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse w-11/12  justify-center items-center  mx-auto">
              <img
                src="https://media.istockphoto.com/photos/walking-robot-motorcycle-picture-id1381016456?k=20&m=1381016456&s=612x612&w=0&h=LphSfcnJAIAEkn9XyD7A3yc7HTnuObWXRuNb7tt7Knw="
                class="w-3/5 rounded-lg shadow-2xl"
                alt=""
              />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.5
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            class="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            class="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="hidden">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Banner;
