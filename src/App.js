import './App.css';
import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import About from './About';
import Home from './Home';
const App = () => {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/force">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }

export default App;
