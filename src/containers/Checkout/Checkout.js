import React, {Component} from 'react';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import Burger from '../../components/Burger/Burger';
import './Checkout.css';
class Checkout extends Component {
  checkOutCancled = () => {
    this.props.history.goBack('/OrderSummery');
  };
  // checkoutSuccess = () => {
  //
  // }
  render() {
    return (
      <div>
        <h1>We hope it test well!</h1>
        <div style={{width: '100%', margin: 'auto'}}>
          <Burger ingridient = {this.props.location.state}/>
        </div>
          <button className='Danger' onClick={this.checkOutCancled}>Cancle</button>
      </div>
    );
  }
}
export default Checkout;
