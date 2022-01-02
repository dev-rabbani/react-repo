import { useReducer } from "react";

// action type
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// initail state
const initialState = {
  count: 0,
};

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        count: state.count + action.payload,
      };
    }
    case DECREMENT: {
      return {
        count: state.count - action.payload,
      };
    }
    case RESET: {
      return {
        count: initialState.count,
      };
    }
    default: {
      return {
        state,
      };
    }
  }
};

const UseReducerHooksComp = () => {
  const [counterInfo, dispatch] = useReducer(reducer, initialState);

  const { count } = counterInfo;
  return (
    <>
      <div>
        <h2>Use Reducer Hooks Comp</h2>
        <div className="row">
          <div className="col-lg-5">
            <div className="card p-5">
              <h3 className="card-title">Count = {count}</h3>
              <div className="d-flex align-items-center gap-3">
                <button
                  className="btn btn-primary"
                  onClick={() => dispatch({ type: INCREMENT, payload: 10 })}
                >
                  Increment
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => dispatch({ type: DECREMENT, payload: 5 })}
                >
                  Decrement
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch({ type: RESET })}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseReducerHooksComp;
