import { Fragment } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Head/Header";
import AvailableMeals from "./Components/Meals/AvailableMeals";

const App = () => {
  const showCart = useSelector((state) => state.showCart);
  return (
    <Fragment>
      {showCart && <Cart />}
      <Header></Header>
      <AvailableMeals></AvailableMeals>
    </Fragment>
  );
};

export default App;
