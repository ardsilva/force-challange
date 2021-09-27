import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import About from './About';
import Home from './Home';
class App extends React.Component {
  render() {
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
}

export default App;