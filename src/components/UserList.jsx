import React from "react";
import Users from "./Users";

const UserList = () => {
  return (
    <div>
      <form className="flex gap-x-7 text-white font-bold text-[18px] items-center">
          <div>
            <label htmlFor="name" className="cursor-pointer">
              Name :{" "}
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name..."
              className="border border-gray-300 placeholder:text-[#ffffffbd] px-4 py-4 rounded-[5px] ml-[5px]"
            />
          </div>
          <div>
            <label htmlFor="email" className="cursor-pointer">
              Email :{" "}
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter Your Email..."
              className="border border-gray-300 placeholder:text-[#ffffffbd] px-4 py-4 rounded-[5px] ml-[5px]"
            />
          </div>
          <button className="bg-[#11b811] px-[7px] h-[50px] rounded-[8px] cursor-pointer">Add User</button>
      </form>
      <Users/>
    </div>
  );
};

export default UserList;
