// /** @format */

// import React, { useEffect, useState } from "react";

// const Review = () => {
//   const [reviews, setReviews] = useState([]);
//   useEffect(() => {
//     fetch("https://secret-journey-33210.herokuapp.com/reviews")
//       .then((res) => res.json())
//       .then((data) => setReviews(data));
//   }, [reviews]);

//   return (
//     <div className="my-10 mb-36">
//       <h1 className="lg:text-4xl text-3xl font-bold py-12 text-center">
//         What Our Customer Say
//       </h1>
//       <div className="grid grid-cols-1  gap-7 md:grid-cols-2 w-11/12 mx-auto">
//         {reviews.map((review) => (
//           <>
//             <div
//               className=" rounded  shadow-lg border  p-2"
//               style={{ height: "200px" }}
//             >
//               <div className="flex  justify-between items-center">
//                 <div className="flex items-center justify-start">
//                   <div class="avatar">
//                     <div class="w-16 border rounded-full">
//                       <img src={review.img} alt="" />
//                     </div>
//                   </div>
//                   <p className="ml-3 font-semibold">{review.name}</p>
//                 </div>

//                 <div class="rating">
//                   <input
//                     type="radio"
//                     name="rating-2"
//                     class="mask mask-star-2 bg-primary"
//                   />
//                   <input
//                     type="radio"
//                     name="rating-2"
//                     class="mask mask-star-2 bg-primary"
//                   />
//                   <input
//                     type="radio"
//                     name="rating-2"
//                     class="mask mask-star-2 bg-primary"
//                   />
//                   <input
//                     type="radio"
//                     name="rating-2"
//                     class="mask mask-star-2 bg-primary"
//                   />
//                   <input
//                     type="radio"
//                     name="rating-2"
//                     class="mask mask-star-2 bg-primary"
//                   />
//                 </div>
//               </div>
//               <div className="py-4 text-left">{review.review}</div>
//             </div>
//           </>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Review;

import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import './Review.css'



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2}
];




const Review = () => {


    const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://secret-journey-33210.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);


  return (
    <div
  
      className=" my-10 mb-36"
    >
      <div style={{ width: "90%" }} className="mx-auto  ">
            <h1 className="lg:text-4xl text-3xl font-bold py-12 text-center">
      What Our Customer Say
     </h1>
        <div className="">
        <Carousel breakPoints={breakPoints}>
     
        {reviews.map((review) => (
          
          <div
          className=" rounded  shadow-lg border m-0  p-2"
          style={{ height: "200px",width:"460px" }}
        >
          <div className="flex  justify-between items-center">
            <div className="flex items-center justify-start">
              <div class="avatar">
                <div class="w-16 border rounded-full">
                  <img src={review.img} alt="" />
                </div>
              </div>
              <p className="ml-3 font-semibold">{review.name}</p>
            </div>

            <div class="rating">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-primary"
              />
            </div>
          </div>
          <div className="py-4 text-left">{review.review}</div>
        </div>
       
        ))}
        </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Review;


