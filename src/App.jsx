import React, { useState } from "react";
import Counter from "./components/Counter";
import Post from "./components/Post";
import "./styles/App.css";
import Postlist from "./components/Postlist";
import PostPublic from "./components/PostPublic";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, post: "i love js", name: "JavaScript" },
    { id: 2, post: "i love C++", name: "C++" },
  ]);

  const [name, setName] = useState("ddd");
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      name,
      post,
    };
    setPosts([...posts, newPost]);
  };

  const [post, setPost] = useState("fff");
  return (
    <div className="App">
      <form>
        <MyInput
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Название поста"
        />
        <MyInput
          onChange={(e) => setPost(e.target.value)}
          value={post}
          placeholder="Текст поста"
        />
        <MyButton onClick={addNewPost}>Запостить</MyButton>
      </form>
      <Postlist posts={posts} title={"Список постов 1"} />
    </div>
  );
}

export default App;
