import { useState } from "react";

const UseStateHooksComp = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = (countStep) => {
    setCount(count + countStep);
  };

  const decrementHandler = (countStep) => {
    setCount(count - countStep);
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <>
      <div>
        <h2>Use State Hooks Comp</h2>
        <div className="row">
          <div className="col-lg-5">
            <div className="card p-5">
              <h3 className="card-title">Count = {count}</h3>
              <div className="d-flex align-items-center gap-3">
                <button
                  className="btn btn-primary"
                  onClick={() => incrementHandler(10)}
                >
                  Increment
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => decrementHandler(5)}
                >
                  Decrement
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => resetHandler()}
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

export default UseStateHooksComp;
