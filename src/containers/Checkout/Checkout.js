import React, {Component} from 'react';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import Burger from '../../components/Burger/Burger';
import ContactData from './ContactData/ContactData';
import './Checkout.css';
import { Route } from 'react-router-dom';
class Checkout extends Component {
  // To Store value from URL
  // componentDidMount() {
  //   const query = new URLSearchParams(this.props.location.search);
  //   const ingredient = {};
  //   for (let param of query.entries()) {
  //     ingredient[param] = + param;
  //   }
  //   console.log('param', ingredient);
  // }
  checkOutCancled = () => {
    this.props.history.goBack('/OrderSummery');
  };
  checkoutSuccess = () => {
    this.props.history.replace({
      pathname: '/ContactData',
      ingredient: this.props.location.state
    });
  }
  render() {
    return (
      <div>
        <h1>We hope it test well!</h1>
        <div style={{width: '100%', margin: 'auto'}}>
          <Burger ingridient = {this.props.location.state}/>
        </div>
          <button className = 'Danger' onClick = {this.checkOutCancled}>Cancle</button>
          <button className = "Success" onClick = {this.checkoutSuccess}>Success</button>
      </div>
    );
  }
}
export default Checkout;
