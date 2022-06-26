/** @format */

import React from "react";
// text-teal-300 
const BusinessSummery = () => {
  return (
    <div className="lg:my-36 ">
      <h1 className="lg:text-4xl text-3xl  w-11/12 mx-auto  font-bold text-center">
        Millions Business Trust Us
      </h1>

      {/* <h1 className="text-xl pt-2 font-bold text-center">
        TRY TO UNDERSTAND USER EXPECTATION
      </h1> */}
      <div className="divider w-1/2  mx-auto"> </div>
      <div className="stats py-8 flex  mx-auto w-11/12 justify-between stats-vertical lg:stats-horizontal rounded-none shadow ">
        <div className="stat">
          <div className="stat-figure text-primary">
            <img
              style={{ width: "40px", height: "40px" }}
              src="    https://cdn3.vectorstock.com/i/thumb-large/59/97/shop-basket-vector-41155997.jpg
     "
              alt=""
            />
          </div>
          <div className="stat-title ">Total Products</div>
          <div className="stat-value ">5M</div>
          <div className="stat-desc">40% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <img
              style={{ width: "40px", height: "40px" }}
              src="   data:image/png;base64,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"
              alt=""
            />
          </div>
          <div className="stat-title">Total Order</div>
          <div className="stat-value text-primary">2.6 M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <img
              style={{ width: "40px", height: "40px" }}
              src="https://cdn.vectorstock.com/i/1000x1000/44/31/trolley-cart-sale-shop-market-buy-icon-vector-40844431.webp"
              alt=""
            />
          </div>
          <div className="stat-title">Served</div>
          <div className="stat-value text-primary">1M</div>
          <div className="stat-desc">1M Served this month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/10/10957.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="stat-value">47%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
