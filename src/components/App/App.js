import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

//Components 
import Header from '../Header/Header';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';
import Admin from '../Admin/Admin';
import AdminLogin from '../AdminLogin/AdminLogin'

import { AnimatedSwitch } from 'react-router-transition';

class App extends Component {
  // Renders the entire app on the DOM

  render() {
    return (
      <Router>
        {/*This animatedSwitch does not seem to work */}
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        ></AnimatedSwitch>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home /> {/*Has all the movies here (using HomeListItem to display) */}
            </Route>
            <Route exact path='/details'>
              <Details /> {/*On click, shows details about the selected movie */}
            </Route>
            <Route exact path='/edit'>
              <Edit /> {/*Allows user to edit details (title and description) of movie */}
            </Route>
            <Route exact path='/admin'>
              <Admin /> {/*Admin page User: camera, Pass: action*/}
            </Route>
            <Route exact path='/adminLogin'>
              <AdminLogin /> {/*Currently displays list of genres that appear in the database*/}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
