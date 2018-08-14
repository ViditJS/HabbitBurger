import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import  App from "../App";
import OrderSummery from '../components/Burger/OrderSummery/OrderSummery';

const Router = () => (
<BrowserRouter>
  <Switch>
  <Route path = "/" component = {App} exact/>
  <Route path = "/OrderSummery" component = {OrderSummery} />
  </Switch>
</BrowserRouter>

);

export default Router;
