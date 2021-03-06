import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
// import Layout from './components/Layout/Layout';
import Checkout from './containers/Checkout/Checkout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
class App extends Component {
  render() {
    return (
      <div>
        <Layout/>
        <BurgerBuilder/>
      </div>
    );
  }
}

export default App;
