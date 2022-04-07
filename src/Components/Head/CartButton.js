import { useDispatch, useSelector } from "react-redux";
import cart from "../../pics/cart.jpg";

import { foodAction } from "../../store/Reducer";
import classes from "./CartButton.module.css";

const CartButton = () => {
  const totalCounter = useSelector((state) => state.totalCounter);
  const dispatch = useDispatch();
  const cartButtonHandler = () => {
    dispatch(foodAction.showCart());
  };

  return (
    <button className={classes.cartButton} onClick={cartButtonHandler}>
      <img src={cart} alt="cart"></img>
      <p>Your Cart</p>
      <p className={classes.counter}>{totalCounter}</p>
    </button>
  );
};

export default CartButton;
