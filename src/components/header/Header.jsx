import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { signOutStart } from '../../redux/user/userActions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './Header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>Shop</OptionLink>
        <OptionLink to='/shop'>Contact</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={signOutStart}>
            Sign Out
          </OptionLink>
        ) : (
          // as = {} can have any different component of just a normal div or a tag. This is a inbuild feature of styled-component
          <OptionLink to='/signin'>Sign in</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? <CartDropdown /> : null}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// createStructuredSelector is function from reselect library which automatically takes global state, we just need to pass mapStateToProps object and call the selector functions without even passing the state.... cool huh?
