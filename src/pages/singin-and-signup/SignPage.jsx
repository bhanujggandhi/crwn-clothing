import React from 'react';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

import { SignPageContainer } from './SignPage.styles';

const SignPage = () => {
  return (
    <SignPageContainer>
      <SignIn />
      <SignUp />
    </SignPageContainer>
  );
};

export default SignPage;
