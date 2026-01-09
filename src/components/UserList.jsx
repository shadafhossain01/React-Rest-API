import React, { useState } from "react";
import Users from "./Users";

const UserList = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editBtn,setEditBtn]=useState(false)
  const [userId,setUserId]=useState("")
  const url = "http://localhost:3000/";

  // For Post Data
  async function fetchPostUser() {
    await fetch(url + "users", {
      method: "POST",
      body: JSON.stringify({ name, email }),
    }).then(() => alert("User Added Sucessfully..."));
  }

  // For Edit Data
  function editFunc (item){
    setUserId(item.id)
    setEditBtn(true)
    setName(item.name)
    setEmail(item.email)
  }

   const editUser = async () => {
     let response = await fetch(url + "users/" + userId, {
       method: "PUT",
       body: JSON.stringify({ name, email }),
     });
     if (response) {
       alert("User data updated");
       setEditBtn(false)
     }
   };
    
  return (
    <div>
      <form className="flex gap-x-7 text-white font-bold text-[18px] items-center">
        <div>
          <label htmlFor="name" className="cursor-pointer">
            Name :{" "}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Enter Your Email..."
            className="border border-gray-300 placeholder:text-[#ffffffbd] px-4 py-4 rounded-[5px] ml-[5px]"
          />
        </div>
        {editBtn ? (
          <button
            className="bg-[#11b811] px-[7px] h-[50px] rounded-[8px] cursor-pointer"
            onClick={editUser}
          >
            Update User
          </button>
        ) : (
          <button
            className="bg-[#11b811] px-[7px] h-[50px] rounded-[8px] cursor-pointer"
            onClick={fetchPostUser}
          >
            Add User
          </button>
        )}
      </form>
      <Users func={editFunc} />
    </div>
  );
};

export default UserList;
