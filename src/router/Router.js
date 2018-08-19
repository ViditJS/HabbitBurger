import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import  App from "../App";
import OrderSummery from '../components/Burger/OrderSummery/OrderSummery';
import Checkout from '../containers/Checkout/Checkout';
import ContactData from '../containers/Checkout/ContactData/ContactData';
import Orders from '../containers/Checkout/Orders/Orders';
const Router = () => (
<BrowserRouter>
  <Switch>
  <Route path = "/" component = {App} exact/>
  <Route path = "/OrderSummery" component = {OrderSummery} />
  <Route path = "/Checkout" component = {Checkout}/>
  <Route path = "/ContactData" component = {ContactData}/>
  <Route path = "/Orders" component = {Orders}/>
  </Switch>
</BrowserRouter>

);

export default Router;
