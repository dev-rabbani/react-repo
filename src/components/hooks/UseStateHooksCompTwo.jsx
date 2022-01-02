import { useEffect, useState } from "react";
import axios from "axios";

const postApi = `https://jsonplaceholder.typicode.com/posts`;

const UseStateHooksCompTwo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    axios
      .get(postApi)
      .then((res) => {
        setIsLoading(false);
        setPosts(res.data.slice(0, 10));
        setErrors("");
      })
      .catch((errors) => {
        setIsLoading(false);
        setPosts([]);
        setErrors(errors);
      });
  }, []);

  return (
    <>
      <div>
        <h2>Use State Hooks Comp</h2>
        {isLoading && <h2>Loading....</h2>}
        {errors && <h2>OPPS!!! Something went wrong</h2>}
        {posts.length > 1 && (
          <ul className="list-group">
            {posts.map((post) => (
              <li className="list-group-item" key={post.id}>
                <h4 className="post-title">{post.title}</h4>
                <p className="lead">{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default UseStateHooksCompTwo;
