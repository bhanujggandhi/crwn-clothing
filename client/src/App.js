import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/header/Header';
import Spinner from './components/spinner/Spinner.jsx';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

import { GlobalStyle } from './global.styles.jsx';

import { selectCurrentUser } from './redux/user/userSelectors';
import { checkUserSession } from './redux/user/userActions';

const Homepage = lazy(() => import('./pages/homepage/Homepage'));
const Shop = lazy(() => import('./pages/shop/Shop'));
const SignPage = lazy(() => import('./pages/singin-and-signup/SignPage'));
const Checkout = lazy(() => import('./pages/checkout/Checkout'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={Shop} />
            <Route exact path='/checkout' component={Checkout} />
            <Route
              exact
              path='/signin'
              render={() => (currentUser ? <Redirect to='/' /> : <SignPage />)}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
