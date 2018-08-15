import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import OrderSummery from '../OrderSummery/OrderSummery';
import Router from '../../../router/Router';
import { Link } from 'react-router-dom';
const controls = [
  {key: 'Salad', type:'salad'},
  {key: 'Bacon', type:'bacon'},
  {key: 'Cheese', type:'cheese'},
  {key: 'Meat', type:'meat'},
];
let ingredientSummery
const BuildControls = (props) => (
  <div className="BuildControls">
    <h1>Burger price is {props.newPrice}</h1>
    {controls.map(control => (
      <BuildControl key = {control.key} name = {control.key}
      added = {() => props.ingredientAdded(control.type)}
      removed = {() => props.ingredientRemoved(control.type)} />
    ))}
    <Link to={{pathname: '/OrderSummery', state: props.ingridients, price: props.newPrice}} className = "OrderButton">ORDER NOW</Link>
  </div>
);
export default BuildControls
