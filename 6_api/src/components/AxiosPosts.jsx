import { useState, useEffect } from "react";
import axios from 'axios'
const AxiosPosts = () => {



  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const axiosPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setPosts(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    axiosPosts();
  }, []);

  return (
    <div>
      <h2>Posts (Axios API)</h2>
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

export default AxiosPosts;
