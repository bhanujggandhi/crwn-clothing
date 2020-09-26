import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
  ErrorImageSubText,
} from '../../components/error-boundary/ErrorBoundary.styles';
import StripeButton from '../../components/stripe/StripeButton';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelectors';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  TestWarningContainer,
} from './Checkout.styles';

const Checkout = ({ cartItems, total }) => {
  return cartItems.length > 0 ? (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <TotalContainer>
        <span>Total: &#8377;{total}.00</span>
      </TotalContainer>
      <TestWarningContainer>
        *Please use the following test credit card for the payments* <br /> 4242
        4242 4242 4242 - Exp: 10/22 - CVV: 123
      </TestWarningContainer>
      <StripeButton price={total} />
    </CheckoutPageContainer>
  ) : (
    <ErrorImageOverlay>
      <ErrorImageContainer imageUrl='https://cdn.dribbble.com/users/204955/screenshots/4930541/emptycart.png' />
      <ErrorImageText>Your cart is empty!</ErrorImageText>
      <ErrorImageSubText>
        Looks like you haven't made your choice yet...
      </ErrorImageSubText>
    </ErrorImageOverlay>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

// const mapStateToProps = (state) => ({
//   cartItems: state.cart.cartItems,
// });

//Same as above code, but above code is memoized i.e cached thus better optimized

export default connect(mapStateToProps)(Checkout);
