import ContextApi from "../../components/context-api";
import UseReducerHooksComp from "../../components/hooks/UseReducerHooksComp";
import UseReducerHooksCompTwo from "../../components/hooks/UseReducerHooksCompTwo";
import UseStateHooksComp from "../../components/hooks/UseStateHooksComp";
import UseStateHooksCompTwo from "../../components/hooks/UseStateHooksCompTwo";
import ReduxLaptopComp from "../../components/redux-comp/ReduxLaptopComp";
import ReduxMobileComp from "../../components/redux-comp/ReduxMobileComp";
import ReduxMobileCompTwo from "../../components/redux-comp/ReduxMobileCompTwo";
import ReduxPostCompOne from "../../components/redux-comp/ReduxPostCompOne";

const Home = () => {
  return (
    <>
      <div>
        <h2>This is Home Page</h2>
        <ReduxMobileComp />
        <ReduxMobileCompTwo />
      </div>
    </>
  );
};

export default Home;
