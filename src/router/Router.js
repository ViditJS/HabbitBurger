import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import  App from "../App";
import OrderSummery from '../components/Burger/OrderSummery/OrderSummery';
import Checkout from '../containers/Checkout/Checkout';
const Router = () => (
<BrowserRouter>
  <Switch>
  <Route path = "/" component = {App} exact/>
  <Route path = "/OrderSummery" component = {OrderSummery} />
  <Route path = "/Checkout" component = {Checkout}/>
  </Switch>
</BrowserRouter>

);

export default Router;
