import { useState } from "react";
import classes from "./Meals.module.css";
import { useDispatch, useSelector } from "react-redux";
import { foodAction } from "../../store/Reducer";

const Meals = ({ id, name, description, price, img }) => {
  const [quantity, setQuantity] = useState(1);

  const foodDetails = useSelector((state) => state.mealItems);
  const dispatch = useDispatch();
  const prevQuantity = useSelector((state) => state.quantity);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const index = foodDetails.findIndex((item) => item.id === id);
    dispatch(foodAction.setQuantity(quantity));
    dispatch(foodAction.totalCounter(+quantity));
    dispatch(foodAction.showCurrentItemPrice(price));

    if (index === -1) {
      const foodDetail = {
        id: id,
        name: name,
        description: description,
        price: price,
        quantity: quantity,
      };
      dispatch(foodAction.addItem({ foodDetail, id, quantity }));
    } else {
      dispatch(foodAction.updateQuantity({ id, prevQuantity, index }));
    }
    dispatch(foodAction.totalAmount(+price));
  };

  return (
    <form className={classes.totalMeals} onSubmit={formSubmitHandler}>
      <div key={id} className={classes["meal-item"]}>
        <div className={classes.image}>
          <img className={classes.allImg} src={img} alt="momo" />
        </div>

        <div className={classes.details}>
          <div className={classes.itemDetails}>
            <div className={classes.name}>{name}</div>
            <div className={classes.description}>{description}</div>
            <div className={classes.price}>₹{price}</div>
          </div>

          <div className={classes.items}>
            <div className={classes.form}>
              <label htmlFor="amount">Amount</label>
              <input
                id="amount"
                type="number"
                min="1"
                max="5"
                step="1"
                defaultValue="1"
                onChange={(event) => setQuantity(event.target.value)}
              ></input>
            </div>

            <button className={classes.addButton} type="submit">
              + Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Meals;
