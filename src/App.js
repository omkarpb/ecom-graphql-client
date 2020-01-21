import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import './App.css';
import Header from './components/header';
import Home from './components/home';
import Product from './components/product';

function App() {
  return (
    <div className="app">
      <Header />
      <div>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='home' />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/product/:id" component={Product} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
