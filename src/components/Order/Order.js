import React from 'react';
import './Order.css';
const Order = (props) => {
  const ingredients = [];
  // for (let ingredientName in props.ingredients) {
  //   console.log('total ingredient is', props.ingredients);
  //   ingredients.push({
  //     name: ingredientName
  //   })
  // }
  // const ingredientOutput = ingredients.map(ig => {
  //   return (
  //     <span key = {ig.name}>{ig.name}</span>
  //   );
  //})
  return (
    <div className = "Order">
      <p>Ingredients: <strong>{props.ingredients}</strong></p>
      <p>Price: <strong>{props.price}</strong></p>
    </div>
  );
}
export default Order;
