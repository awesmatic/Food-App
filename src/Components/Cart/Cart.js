import { useDispatch, useSelector } from "react-redux";
import { foodAction } from "../../store/Reducer";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const totalCartItems = useSelector((state) => state.mealItems);
  const totalAmount = useSelector((state) => state.totalAmount);

  const closeButtonHandler = () => {
    dispatch(foodAction.showCart());
  };

  const cartItems = totalCartItems.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      price={item.price}
      quantities={item.quantity}
      description={item.description}
      name={item.name}
    ></CartItem>
  ));

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹{Math.abs(totalAmount.toFixed(2))}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeButtonHandler}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
