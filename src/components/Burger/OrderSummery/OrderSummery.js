import React from 'react';
import { Link } from 'react-router-dom';
import './OrderSummery.css';
import axios from '../../../axios-orders';
class OrderSummery extends React.Component {
  purchaseContinueHandler = () => {
    console.log('continue');
    const order = {
      ingredients: 'cheese',
      price: 1,
      customer: {
        name: 'Vidit Shah'
      }
    }
    axios.post('/orders.json', order)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }
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
      <button className='Success' onClick = {() => this.purchaseContinueHandler()}>Continue</button>
      <Link to = '/' className="Danger">Cancle</Link>
    </div>
  );
}
}
export default OrderSummery;
