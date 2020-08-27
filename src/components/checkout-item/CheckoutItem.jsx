import React from 'react';

import { connect } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cartActions';

import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem, dispatch }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div onClick={() => dispatch(removeItem(cartItem))} className='arrow'>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div onClick={() => dispatch(addItem(cartItem))} className='arrow'>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div
        onClick={() => dispatch(clearItemFromCart(cartItem))}
        className='remove-button'
      >
        &#10005;
      </div>
    </div>
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
