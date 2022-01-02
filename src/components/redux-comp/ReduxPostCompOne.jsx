import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchPosts from "../../redux/post/postActions";

const ReduxPostCompOne = () => {
  const { post } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { isLoading, posts, errors } = post;
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <>
      <div>
        <h2>Redux Post Comp One</h2>
        {isLoading && <h2>Loading.....</h2>}
        {errors && <h2>OPPS!! Something went wrong</h2>}
        {posts.length > 1 && (
          <ul className="list-group">
            {posts.map((post) => (
              <li className="list-group-item" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ReduxPostCompOne;
