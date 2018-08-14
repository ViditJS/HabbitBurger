import React from 'react';
class OrderSummery extends React.Component {
  render() {
    const ingredientSummery = Object.keys(this.props.location.state).map(
      key => {
        return (<li key={key}> {key} : {this.props.location.state[key]}</li>);
      })
   return (
    <div>
      <h3> Your order</h3>
      <p> A delecious Burger following ingredients: </p>
      {ingredientSummery}
      <p> Continue to Checkout? </p>
    </div>
  );
}
}
export default OrderSummery;
