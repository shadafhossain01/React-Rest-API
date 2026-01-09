import React, { useState } from "react";
import Users from "./Users";
import { fetchUser, url } from "../api/UserApi";

const UserList = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editBtn,setEditBtn]=useState(false)
  const [userId,setUserId]=useState("")
  const [users, setUsers] = useState([]);

  // For Post Data
async function fetchPostUser(e) {
  e.preventDefault();

  try {
    await fetch(url + "users", {
      method: "POST",
      body: JSON.stringify({ name, email }),
    });
    alert("User Added Successfully...");
    const data = await fetchUser();
    setUsers(data);
    setName("");
    setEmail("");
  } catch (error) {
    console.error(error);
    alert("Failed to add user");
  }
}

  // For Edit Data
  function editFunc (item){
    setUserId(item.id)
    setEditBtn(true)
    setName(item.name)
    setEmail(item.email)
  }

   const editUser = async (e) => {
    e.preventDefault()
     let response = await fetch(url + "users/" + userId, {
       method: "PUT",
       body: JSON.stringify({ name, email }),
     });
     if (response) {
       alert("User data updated");
       const data= await fetchUser()
       setUsers(data)
       setName("");
       setEmail("");
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
            type="submit"
            className="bg-[#11b811] px-[7px] h-[50px] rounded-[8px] cursor-pointer"
            onClick={editUser}
          >
            Update User
          </button>
        ) : (
          <button
            type="submit"
            onClick={fetchPostUser}
            className="bg-[#11b811] px-[7px] h-[50px] rounded-[8px] cursor-pointer"
          >
            Add User
          </button>
        )}
      </form>
      <Users func={editFunc} users={users} setUsers={setUsers} />
    </div>
  );
};

export default UserList;
