import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { connect } from 'react-redux';
import { clearCart } from '../../redux/cart/cartActions.js';

const StripeButton = ({ price, dispatch }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HAjX8F1sQdXWctKdm5QEKWIcMcU1suxCfSFEVlZndwXLuLRuShOTQ9NXbX7VgnsBg9LYVzSlZeuYK9rRPGejudl006W3PfTT1';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert('succesful payment');
        dispatch(clearCart());
      })
      .catch((error) => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is ₹${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      currency='INR'
    />
  );
};

export default connect()(StripeButton);
