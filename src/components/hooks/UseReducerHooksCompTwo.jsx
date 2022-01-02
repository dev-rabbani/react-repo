import axios from "axios";
import { useEffect, useReducer } from "react";

// action type
const LOADING = "LOADING";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERRORS = "FETCH_ERRORS";

// initailStates
const initailStates = {
  isLoading: false,
  posts: [],
  errors: "",
};

//reducer
const reducer = (state, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
    }
    case FETCH_ERRORS: {
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const postApi = `https://jsonplaceholder.typicode.com/posts`;

const UseReducerHooksCompTwo = () => {
  const [postInfo, dispatch] = useReducer(reducer, initailStates);
  const { isLoading, posts, errors } = postInfo;

  useEffect(() => {
    dispatch({ type: LOADING });
    axios
      .get(postApi)
      .then((res) =>
        dispatch({ type: FETCH_SUCCESS, payload: res.data.slice(0, 10) })
      )
      .catch((errors) => dispatch({ type: FETCH_ERRORS, payload: errors }));
  }, []);

  console.log(postInfo);

  return (
    <>
      <div>
        <h2>Use Reducer Hooks Component with Api</h2>
        {isLoading && <h2> Loading......</h2>}
        {errors && <h2>OPPS!! Something went wrong.</h2>}
        {posts.length > 1 && (
          <ul className="list-group">
            {posts.map((post) => (
              <li className="list-group-item" key={post.id}>
                <h3 className="post-title">{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default UseReducerHooksCompTwo;
