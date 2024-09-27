import { useState, useEffect } from "react";

const FetchPosts = () => {



  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const data = await response.json();

        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts (Fetch API)</h2>
      {error ? (
        <p>Erro: {error}</p>
      ) : (
        posts.map((posts) => (
          <div key={posts.id}>
            <h2>{posts.title}</h2>
            <p>{posts.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FetchPosts;
