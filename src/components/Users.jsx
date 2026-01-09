import React, { useEffect, useState } from "react";

const Users = () => {
  const [users,setUsers]=useState([])
  const url = "http://localhost:3000/";

  // For Getting Data
    async function fetchUser() {
      await fetch(url + "users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }

  useEffect(()=>{
    fetchUser()
  },[])

  return (
    <div className="mt-[50px] grid grid-cols-4 gap-y-4 gap-x-5">
      {users.map((item) => (
        <div
          className="border border-[#ffffff85] px-5 py-7 rounded-[20px]"
          key={item.id}
        >
          <img
            className="w-[100px] h-[100px] mb-[25px] mx-auto rounded-full"
            src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
          />
          <h2 className="font-bold text-white text-[21px]">
            Name : {item.name}
          </h2>
          <h2 className="font-bold text-white text-[21px]">
            Email : {item.email}
          </h2>
          <div className="mt-[19px] flex gap-x-[15px]">
            <button className="bg-[#11b811] px-[25px] py-3 rounded-[8px] cursor-pointer">
              Edit
            </button>
            <button className="bg-[#b81111] px-[25px] py-3  rounded-[8px] cursor-pointer text-white">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
