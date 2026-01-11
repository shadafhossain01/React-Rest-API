  export const url = "http://localhost:3000/";

  export const fetchUser=async()=> {
   const res = await fetch(url + "users");;
  const data = await res.json();
  return data;
  }

