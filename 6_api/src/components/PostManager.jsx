import { useState, useEffect } from "react";
import axios from "axios";
import PostForm from "./PostForm";

const PostManager = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");


  const [selectedPost, setSelectedPost] = useState(null)


  const handleSuccess = (post, operation) => {
    if (operation === "add") {
      setPosts((currentPosts) => [post, ...currentPosts]);
    }
  };

  useEffect(() => {
    const axiosPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setPosts(response.data.slice(0, 5));
      } catch (error) {
        setError(error.message);
      }
    };

    axiosPosts();
  }, []);

  return (
    <div>
      <h1>Gerenciar posts </h1>
      <PostForm onSuccess={handleSuccess}/>
      <h2>Postagens</h2>
      {posts.map((posts) => (
        <div key={posts.id}>
          <h2>{posts.title}</h2>
          <p>{posts.body}</p>
          <button>Editar</button>
        </div>
      ))}
    </div>
  );
};

export default PostManager;
