import React, { useEffect } from "react";
import { fetchUser, url } from "../api/UserApi";

const Users = ({ func,users,setUsers }) => {

  // For Getting User Data
  useEffect(() => {
    const loadUser=async()=>{
     const data=await fetchUser();
    setUsers(data)
   }
   loadUser()
  }, []);

  // For Delete User Data
async function fetchDelteUser(id) {
  try {
    await fetch(url + "users/" + id, { method: "DELETE" });
    alert("User Deleted Successfully...");
    const data = await fetchUser();
    setUsers(data);
  } catch (error) {
    console.error(error);
    alert("Failed to delete user");
  }
}

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
            <button
              className="bg-[#11b811] px-[25px] py-3 rounded-[8px] cursor-pointer"
              onClick={() => func(item)}
            >
              Edit
            </button>
            <button
              className="bg-[#b81111] px-[25px] py-3  rounded-[8px] cursor-pointer text-white"
              onClick={() => fetchDelteUser(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
