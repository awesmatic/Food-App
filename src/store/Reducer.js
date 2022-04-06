import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  mealItems: [],
  quantity: 0,
  totalCounter: 0,
  totalAmount: 0,
  currentItemPrice: 0,
};
const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    showCurrentItemPrice(state, action) {
      state.currentItemPrice = action.payload;
    },
    showCart(state) {
      state.showCart = !state.showCart;
    },
    addItem(state, action) {
      state.mealItems.push(action.payload.foodDetail);
    },
    totalCounter(state, action) {
      state.totalCounter = state.totalCounter + action.payload;
    },
    totalAmount(state, action) {
      state.totalAmount += +action.payload * +state.quantity;
    },
    setQuantity(state, action) {
      state.quantity = action.payload;
    },
    updateQuantity(state, action) {
      const { index } = action.payload;
      const prevQuantity = state.mealItems[index].quantity;
      state.mealItems[index].quantity = +prevQuantity + +state.quantity;
    },
    removeItem(state, action) {
      const { id } = action.payload;
      const selectedItemIndex = state.mealItems.findIndex(
        (item) => item.id === id
      );
      if (state.mealItems[selectedItemIndex].quantity === 1) {
        state.totalCounter -= 1;
        state.totalAmount = state.totalAmount - state.currentItemPrice;
        state.mealItems = state.mealItems.filter((item) => item.id !== id);
      } else {
        state.mealItems[selectedItemIndex].quantity--;
        state.totalCounter -= 1;
        state.totalAmount = state.totalAmount - state.currentItemPrice;
      }
    },
    increaseItem(state, action) {
      const { id } = action.payload;
      state.totalCounter += 1;
      const selectedItemIndex = state.mealItems.findIndex(
        (item) => item.id === id
      );
      state.mealItems[selectedItemIndex].quantity =
        parseInt(state.mealItems[selectedItemIndex].quantity) + 1;
      state.totalAmount += state.currentItemPrice;
    },
  },
});

const store = configureStore({
  reducer: foodSlice.reducer,
});

const foodAction = foodSlice.actions;

export default store;

export { foodAction };
