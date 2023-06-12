import React from "react";
import Nav from "./Nav";

function Hero() {
  return (
    <div className="text-center">
      <div className="image">
        <Nav />
        <p className="text-4xl font-bold">
          Unlimited movies, TV shows and more
        </p>
        <p className=" text-xl font-bold mt-2">Watch anywhere,Cancel anytime</p>
        <p className="text-xl mt-3">
          Ready to Watch? Enter your email to create or reset your membership.
        </p>

        <div className="mt-3">
          <input
            type="email"
            placeholder="Email Address"
            style={{
              backgroundColor: "transparent",
              border: "2px solid white",
              height: "40px",
              width: "300px",
            }}
          />
          <button className="h-[40px] w-130px p-2 text-xl font-bold bg-red-600 ml-3 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
