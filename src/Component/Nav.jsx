import React from "react";

function Nav() {
  return (
    <div className="Nav ">
      <h1 className="text-red-700 font-bold  text-4xl">NETFLIX</h1>

      <div>
        <select className=" mr-5 w-24 h-8 bg-gray-950">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>

        <button className="w-20 h-8 bg-red-600 font-bold rounded-md">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Nav;
