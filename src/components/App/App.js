import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path ='/'>
            <Home/>
          </Route>
          <Route exact path ='/details'>
            <Details/>
          </Route>
          <Route exact path ='/edit'>
            <Edit/>
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
