
import React from "react";
// style={{
//     backgroundImage: "url(https://images.unsplash.com/photo-1619765617659-f3dcb700c27f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW90b3JjeWNsZSUyMHBhcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800)",backgroundRepeat:"none",height:"600px"
// }}

const Contact = () => {
  return (
    <div className=" bg-indigo-50 px-10 py-14 my-15  w-11/12 mx-auto">
      <div className="text-center pb-14 text-white">
        <h1 className="text-4xl text-black">Stay connected with us</h1>
      </div>
      <div className="grid   grid-cols-1 justify-items-center gap-5">
        <input
          type="text"
          placeholder="Email Address"
          className="input w-full max-w-md"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input w-full max-w-md"
        />
        <textarea
          className="textarea w-full max-w-md"
          placeholder="Your message"
          rows={6}
        ></textarea>
        <input
          type="submit"
          className="btn btn-wide btn-primary"
          value="Submit"
        />
      </div>
    </div>
  );
};

export default Contact;