import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom'
import Login from './components/Login'
import Friends from './components/Friends'
import { PrivateRoute } from './components/PrivateRoute'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <h1>Friend App</h1>
          <Link to="/login">Login</Link>
          <Link to="/friends">Protected Page</Link>
          <Route exact path='/login' component={Login} />
          <PrivateRoute path='/friends' component={Friends} />
        </div>
      </Router>
    );
  }
}

export default App;
