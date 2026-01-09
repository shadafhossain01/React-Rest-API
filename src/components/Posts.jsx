import React, { useEffect, useState } from "react";

const Posts = () => {
    const [posts,setPosts]=useState([])
    const url = "http://localhost:3000/";
  
    // For Getting Data
      async function fetchPost() {
        await fetch(url + "posts")
          .then((res) => res.json())
          .then((data) => setPosts(data));
      }
      
    useEffect(()=>{
      fetchPost();
    },[])

  return (
    <div className="mt-[50px] grid grid-cols-3 gap-y-4 gap-x-5">
      {posts.map((item) => (
        <div
          className="border border-[#ffffff85] px-5 py-5 rounded-[20px]"
          key={item.id}
        >
          <h2 className="font-bold text-[#ffffff] text-[21px] mb-[15px]">
            Tittle : {item.tittle}
          </h2>
          <p className="font-medium text-[#ffffffb6] text-[21px]">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
