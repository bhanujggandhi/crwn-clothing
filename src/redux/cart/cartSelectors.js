import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, item) => accumalatedQuantity + item.quantity,
      0
    )
);

// Everytime state changes in react, all the components using any state re-renders, which in turn makes our application slower.
// To avoid this, we have used selectors, which only provide a piece of state to react-components. If and only if that piece of state will change, then only react-component will re-render otherwise it will stay in the current state.
// This is called memoization of state. We are caching the previous state so that will not change.
