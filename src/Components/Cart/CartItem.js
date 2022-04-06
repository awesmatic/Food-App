import { useDispatch } from "react-redux";
import { foodAction } from "../../store/Reducer";
import classes from "./CartItem.module.css";

const CartItem = ({ id, name, price, quantities }) => {
  const dispatch = useDispatch();

  const decreaseItemHandler = () => {
    dispatch(foodAction.showCurrentItemPrice(price));

    dispatch(foodAction.removeItem({ id }));
  };

  const increaseItemHandler = () => {
    dispatch(foodAction.showCurrentItemPrice(price));

    dispatch(foodAction.increaseItem({ id }));
  };

  return (
    <li key={id} className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>₹{price}</span>
          <span className={classes.amount}>x {quantities}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={decreaseItemHandler}>−</button>
        <button onClick={increaseItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
