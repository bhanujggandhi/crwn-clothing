export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// Here we are writing a function which will take existing cart items as well as cart item to add. It will find in cart item if it finds something using .find method. If it will that item is already present in the cart then it will return the item otherwise undefined.
// Next, if it gives something which will be stored in existingCartItem then it will map the cartItems array and check the item which is duplicate and increment its quantity property by 1. If it does not find anything then it will just return the item as it as. That is, it will only update the duplicateitem and nothing else.
// If existingCartItem is undefined then it will just return a new array having item to add with it's quantity to be 1.

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
