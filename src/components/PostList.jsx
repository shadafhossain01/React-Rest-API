import React, { useState } from "react";
import Posts from "./Posts";
import { url } from "../api/UserApi";
import { fetchPost } from "../api/PostApi";

const PostList = () => {
  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")
  const [posts, setPosts] = useState([]);

  const addPost=async(e)=>{
    e.preventDefault()
    await fetch(url+"posts",{
      method:"POST",
      body:JSON.stringify({title,desc})
    })
      setTitle("");
      setDesc("");
      const data = await fetchPost()
      setPosts(data)
  }

  return (
    <div>
      <form
        className="flex gap-x-7 text-white font-bold text-[18px] items-center"
        onSubmit={addPost}
      >
        <div>
          <label htmlFor="title" className="cursor-pointer">
            Post Title :
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            id="desc"
            placeholder="Enter Your Description..."
            className="border border-gray-300 placeholder:text-[#ffffffbd] px-4 py-4 w-[500px] rounded-[5px] ml-[5px]"
          />
        </div>
        <button
          type="submit"
          className="bg-[#11b811] px-4 py-3 rounded-[8px] cursor-pointer"
        >
          Add Post
        </button>
      </form>
      <Posts posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default PostList;
