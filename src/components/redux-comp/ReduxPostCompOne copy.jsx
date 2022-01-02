import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchPosts from "../../redux/post/postActions";

const ReduxPostCompOne = () => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state);
  const { isLoading, posts, errors } = post;
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  console.log(post);

  return (
    <>
      <div>
        <h2>Redux Post Comp with Api end point</h2>
        {isLoading && <h2>Loading.....</h2>}
        {errors && <h2>OPPS!! Something went wrong.</h2>}
        {posts && (
          <ul className="list-group">
            {posts.map((post) => (
              <li className="list-group-item" key={post.id}>
                <h4>{post.title}</h4>
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
