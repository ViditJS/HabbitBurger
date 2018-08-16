import React from 'react';
import { Link } from 'react-router-dom';
import './OrderSummery.css';
import axios from '../../../axios-orders';
import Spinner from '../../UI/Spinner/Spinner';
class OrderSummery extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return ((nextProps.show != this.props.show) || (nextProps.children != this.props.children));
  };
  state = {
    loading: false
  }
  purchaseContinueHandler = () => {
    this.setState({
      loading: true
    });
    const order = {
      ingredients: 'cheese',
      price: 1,
      customer: {
        name: 'Vidit Shah',
        address: {
          street: 'TestStreet 1',
          zipcode: '41351',
          country: 'Germany'
        },
        deliveryMethod: 'fastest'
      }
    }
    axios.post('/orders.json', order)
    .then(response => this.setState({
      laoding: false
    }))
    .catch(error => console.log(error));
  }
  render() {
    if (this.state.loading) {
        <Spinner/>
    }
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
