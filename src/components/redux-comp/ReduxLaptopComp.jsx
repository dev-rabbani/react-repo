import { useSelector, useDispatch } from "react-redux";
import { buyLaptop } from "../../redux/laptop/laptopActions";

const ReduxLaptopComp = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);
  const { laptop } = reduxState;
  return (
    <>
      <div>
        <h2>Redux Product Componet </h2>
        <h3>Total Laptop Stock = {laptop.totalLaptop}</h3>
        <div>
          <button
            className="btn btn-secondary"
            onClick={() => dispatch(buyLaptop())}
          >
            Buy Laptop
          </button>
        </div>
      </div>
    </>
  );
};

export default ReduxLaptopComp;
