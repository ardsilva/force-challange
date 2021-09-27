import './App.css';
import React from 'react';
import logo from './logo.svg';
import axios from "axios";

class Home extends React.Component {
    state = {
    forceSide: {},
    isLoading: true,
    errors: null
  };

  getForceSide() {
    Promise.race([axios
      .get("https://swapi.dev/api/people/1"), axios
      .get("https://swapi.dev/api/people/4")])
    .then(res => {console.log(res.data);
      this.setState({forceSide: res.data});
    }).catch(err => console.log(err))
    .finally(() => this.setState({isLoading: false}));
  }

  componentDidMount() {
    this.getForceSide();
  }

  render() {
    const { isLoading, forceSide } = this.state;
    return (
      <React.Fragment>
        <div><button>back</button></div>
        <div><button onClick={() => this.getForceSide()}>choose your path again, Padawan</button></div>
        
        <div>
          {!isLoading ? (
            <p>Your master is <strong>{forceSide.name}</strong></p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }

}

export default Home;
