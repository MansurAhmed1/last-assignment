/** @format */

import React from "react";

const BannerTest = () => {
  return (
  <div>
        <div
      class="hero mx-auto "
      style={{
        background: "url(https://png.pngtree.com/thumb_back/fw800/background/20201009/pngtree-science-or-technology-background-with-dynamic-particles-trendy-colorful-design-template-image_406781.jpg)",
        height:"90vh",
        width:"90%"
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md mb-24 lg:mb-0">
          <h1 class="mb-5  text-2xl md:text-5xl font-bold">Hello there</h1>
          <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>






<div class="carousel w-full" style={{height:"80vh"}}>
  <div id="slide1" class="carousel-item relative w-full">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exercitationem asperiores minus molestiae eveniet dolorem magnam culpa laborum. Doloribus natus aspernatur, illum neque voluptas totam molestiae aut, doloremque ullam quibusdam optio vero alias libero veniam architecto a, aliquid voluptatibus magnam ducimus sunt aliquam suscipit voluptates quae. Tempora quidem minus eligendi soluta autem, velit ex maiores repudiandae unde quia animi provident suscipit temporibus odit. Quisquam nostrum dolorum optio aut quae ipsum ullam non eligendi pariatur accusantium a veniam aliquam id eum vero libero, sit impedit. Illum qui doloremque unde impedit iste excepturi corporis adipisci aliquid autem nesciunt commodi cupiditate necessitatibus labore maiores, molestias sit quaerat, possimus vitae quo sed. Ipsa, itaque?</p>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-full" alt="" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-full" alt="" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full" alt="" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle" >❯</a>
    </div>
  </div>
</div>
  </div>
  );
};

export default BannerTest;
