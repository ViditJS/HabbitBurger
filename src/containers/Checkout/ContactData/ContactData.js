import React, {Component} from 'react';
import './ContactData.css';
class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }
  orderHandler = (event) => {
    event.preventDefault();
    // final store ingredient
    console.log('final ingredient', this.props.location.ingredient);
  }
  render() {
    return (
      <div className = "ContactData">
        <h4>Enter your contact datail</h4>
        <form>
          <div>
            <input type="text" name="name" placeholder = "your Name"/>
            <input type="email" name="email" placeholder = "Your email"/>
          </div>
          <div>
            <input type="text" name="street" placeholder= "Postal code"/>
            <button onClick = {this.orderHandler}>Order</button>
          </div>
        </form>
      </div>
    )
  }
}
export default ContactData;
