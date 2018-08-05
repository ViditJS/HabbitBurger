import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
  {key: 'Salad', type:'salad'},
  {key: 'Bacon', type:'bacon'},
  {key: 'Cheese', type:'cheese'},
  {key: 'Meat', type:'meat'},
];
const BuildControls = (props) => (
  <div className="BuildControls">
    <h1>Burger price is {props.newPrice}</h1>
    {controls.map(control => (
      <BuildControl key = {control.key} name = {control.key}
      added = {() => props.ingredientAdded(control.type)}
      removed = {() => props.ingredientRemoved(control.type)} />
    ))}
    <button className = "OrderButton" disabled = {!props.purchasable}>ORDER NOW </button>
  </div>
);
export default BuildControls
