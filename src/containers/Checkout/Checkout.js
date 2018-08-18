import React, {Component} from 'react';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import Burger from '../../components/Burger/Burger';
class Checkout extends Component {
  render() {
    console.log('AXZS',this.props.location.state);
    return (
      <div className="Checkout">
        <h1>We hope it test well!</h1>
        <div style={{width: '100%', margin: 'auto'}}>
          <Burger ingridient = {this.props.location.state}/>
        </div>
      </div>
    );
  }
}
export default Checkout;
