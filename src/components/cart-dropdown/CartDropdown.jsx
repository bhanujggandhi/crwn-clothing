import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cartActions';

import './CartDropdown.scss';

const CartDropdown = ({ items, history, toggleCartHidden }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          toggleCartHidden();
        }}
      >
        Go to checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);

// Nested HOC works inside out. i.e we will get connected function firt and then withRouter HOC
// withRouter is a function provided by react-router-dom which is a HOC, takes a component and gives back a component having 'history, match, location' in it's props. history object has various methods such as push
// To read full history object, just look https://reactrouter.com/web/api/history

// ------------------------------------------

// Other way to dispatch an action is using connect function, you directly have dispatch object in the props.
// We can just use
// onClick = () = {
//   history.push('/checkout');
//   dispatch(toggleCartHidden())
// }
