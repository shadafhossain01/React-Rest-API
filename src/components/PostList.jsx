import React from "react";
import Posts from "./Posts";

const PostList = () => {
  return (
    <div>
      <form className="flex gap-x-7 text-white font-bold text-[18px] items-center">
        <div>
          <label htmlFor="title" className="cursor-pointer">
            Post Title :{" "}
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter Your Title..."
            className="border border-gray-300 placeholder:text-[#ffffffbd] px-5 py-4 rounded-[5px] ml-[5px]"
          />
        </div>
        <div>
          <label htmlFor="desc" className="cursor-pointer">
            Description :{" "}
          </label>
          <input
            type="text"
            id="desc"
            placeholder="Enter Your Description..."
            className="border border-gray-300 placeholder:text-[#ffffffbd] px-4 py-4 w-[500px] rounded-[5px] ml-[5px]"
          />
        </div>
        <button className="bg-[#11b811] px-4 py-3 rounded-[8px] cursor-pointer">
          Add Post
        </button>
      </form>
      <Posts/>
    </div>
  );
};

export default PostList;
