const { cartActionTypes } = require('./cartTypes');

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});
