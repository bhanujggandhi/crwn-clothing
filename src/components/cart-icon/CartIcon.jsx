import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cartActions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ togglecartHidden, items }) => {
  return (
    <div className='cart-icon' onClick={togglecartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{items.length}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  togglecartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  items: state.cart.cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
