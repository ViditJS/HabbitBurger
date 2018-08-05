import React from 'react';
const OrderSummery = (props) => {
  console.log('props is', props);
   const ingredientSummery = Object.keys(props.ingridients).map(
     key => {
       return (<li>key = {key} : {props.ingridients[key]}</li>);
     })
   console.log('total ingredients in burger', ingredientSummery);
   return (
    <div>
      <h3> Your order</h3>
      <p> A delecious Burger following ingredients: </p>
      <ul>
        {ingredientSummery}
      </ul>
    </div>
  );
}
export default OrderSummery;
