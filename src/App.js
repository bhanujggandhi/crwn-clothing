import React from 'react';
import './App.css';

import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import SignPage from './pages/singin-and-signup/SignPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' component={SignPage} />
      </Switch>
    </div>
  );
}

export default App;
