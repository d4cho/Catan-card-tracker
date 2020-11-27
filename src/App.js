import React, { Component } from 'react';
import Aux from './hoc/Auxiliary/Auxiliary';
import CardsManager from './containers/CardManager/CardsManager';
import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.App}>Catan Card Tracker</div>
        <CardsManager />
      </Aux>
    );
  }
}

export default App;
