import {url} from "./UserApi.js"

export const fetchPost = async () => {
  const res = await fetch(url + "posts");
  const data = await res.json();
  return data;
};
