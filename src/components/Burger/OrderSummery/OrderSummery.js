import React from 'react';
import { Link } from 'react-router-dom';
import './OrderSummery.css';
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
      <p><strong> Burger price is : {this.props.location.price}</strong></p>
      <p> Continue to Checkout? </p>
      <button className='Success'>Continue</button>
      <Link to = '/' className="Danger">Cancle</Link>
    </div>
  );
}
}
export default OrderSummery;
