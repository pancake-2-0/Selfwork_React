import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const getPost = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const json = await response.json();
    setPost(json);
  };

  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <>
      <h1>Detail</h1>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </>
  );
}
