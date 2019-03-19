import React, { Component } from 'react';

import './App.css';

import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/configureStore";

import PrivateRoute from './common/user/PrivateRoute';

import Home from "./views/auth/components/Home";
import Login from './views/auth/components/Login'
import Register from './views/auth/components/Register'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/login" name="Login" component={Login} />
            <Route path="/register" name="Register" component={Register} />
            <PrivateRoute path="/" name="Home" component={Home} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App; 