import React from 'react';
import './App.css';

import Homepage from './pages/homepage/Homepage';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => {
  return <h1>Hats Page</h1>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
