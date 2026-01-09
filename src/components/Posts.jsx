import React, { useEffect } from "react";
import { fetchPost } from "../api/PostApi";

const Posts = ({posts,setPosts}) => {
  
    // For Getting Data
    useEffect(() => {
      const loadPosts = async () => {
        const data = await fetchPost();
        setPosts(data);
      };
      loadPosts();
    }, []);

  return (
    <div className="mt-[50px] grid grid-cols-3 gap-y-4 gap-x-5">
      {posts.map((item) => (
        <div
          className="border border-[#ffffff85] px-5 py-5 rounded-[20px]"
          key={item.id}
        >
          <h2 className="font-bold text-[#ffffffe1] text-[21px] mb-[15px]">
            Tittle : {item.title}
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
