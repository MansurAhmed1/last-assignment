/** @format */

import React, { useEffect, useState } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

  return (
    <div className="my-10 mb-36">
      <h1 className="text-3xl font-bold py-12">What Our Customer Say</h1>
      <div className="grid grid-cols-1  gap-7 md:grid-cols-2 w-11/12 mx-auto">
        {reviews.map((review) => (
          <>
            <div className=" rounded  shadow-lg border p-2">
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
                    class="mask mask-star-2 bg-orange-400"
                   
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <div className="py-4 text-left">{review.review}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Review;
