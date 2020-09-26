import React from 'react';

import { connect } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cartActions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './CheckoutItem.styles';

const CheckoutItem = ({ cartItem, dispatch }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>&#8377;{price}.00</TextContainer>
      <RemoveButtonContainer
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default connect()(CheckoutItem);

//We have used shorthand for mapDispatchToProps, that is if we connect HOC to our component, then we have 'dispatch' function in props. So we can call
// onClick={() => dispatch(clearItemFromCart(cartItem))}

// It is equivalent to
// const mapDispatchToProps = (dispatch) => ({
//   removeItem: (item) => dispatch(clearItemFromCart(item)),
// });
// export default connect(null, mapDispatchToProps)(CheckoutItem);
// and then,
// onClick={() => removeItem(cartItem)}
