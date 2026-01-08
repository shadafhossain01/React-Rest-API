import React from "react";
import { Link, Outlet } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto">
        <ul className="flex mt-[26px] justify-center">
          <li className="mr-[24px] text-white font-bold text-[22px]">
            <Link to="/">User List</Link>
          </li>
          <li className=" text-white font-bold text-[22px]">
            <Link to="/posts">Posts List</Link>
          </li>
        </ul>
      </div>
      <div className="w-[80%] mx-auto mt-[55px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Hero;
