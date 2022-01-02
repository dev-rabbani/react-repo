import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const ContextApi = () => {
  const { theme, themeToggler } = useContext(ThemeContext);
  return (
    <>
      <>
        <div>
          <h2>Context Api Demo</h2>
          <h3>Theme is {theme}</h3>
          <button onClick={() => themeToggler()} className="btn btn-danger">
            Theme Toggler
          </button>
        </div>
      </>
    </>
  );
};

export default ContextApi;
