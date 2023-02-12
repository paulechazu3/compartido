import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}

      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => contador > 0 && setContador(contador - 1)}>
        Decrementar
      </button>
      <button onClick={() => setContador(0)}>resetear</button>
    </div>
  );
}