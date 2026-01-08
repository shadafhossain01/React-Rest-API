import { Route, Routes } from "react-router-dom"
import UserList from "./components/UserList"
import PostList from "./components/PostList"
import Hero from "./components/Hero"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Hero />}>
        <Route path="/" element={<UserList />} />
        <Route path="/posts" element={<PostList />} />
      </Route>
    </Routes>
  );
}

export default App
