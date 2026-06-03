import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    setPosts(json);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
