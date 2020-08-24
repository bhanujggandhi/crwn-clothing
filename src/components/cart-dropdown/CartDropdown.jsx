import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';

import './CartDropdown.scss';

const CartDropdown = ({ items }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
