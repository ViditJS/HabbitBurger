import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import axios from '../../axios-orders';
import Checkout from '../Checkout/Checkout';
 // import Modal from '../../components/UI/Modal/Modal.js';
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.75,
  cheese: 1,
  meat: 0.75
}
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }
  componentDidMount() {
    axios.get('https://thehabbitburger.firebaseio.com/ingredients.json')
    .then (response => {
      this.setState({ingredients: response.data});
    });
  }
  // Total amount of burger
  updatePurchasable (ingredients) {
    const sum = Object.keys(ingredients).map(
      key => {
        return ingredients[key];
      }).reduce((sum, el) => {
        return sum + el;
      }, 0);
      this.setState({purchasable: sum > 0 });
  }
  addIngredientHandler = (type) => {
    console.log('type of ingridient', type);
    // To store current ingredients value in object.
    const updatedIngredients = {
      ...this.state.ingredients
    }
    console.log('updated ingridient', updatedIngredients);
      const oldIngredient = this.state.ingredients[type];
      console.log('old ingridient', oldIngredient);
      const updatedIngredient = oldIngredient + 1;
      console.log('new ingridient', updatedIngredient);
      // store new ingredient value in object.
      updatedIngredients[type] = updatedIngredient;
      console.log('updated ingridient', updatedIngredients);
      // For price addition
      const priceAddition = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice + priceAddition;
      this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
      this.updatePurchasable(updatedIngredients);
  }
  removeIngredientHandler = (type) => {
    console.log('type of ingridient', type);
    // To store current ingredients value in object.
    const updatedIngredients = {
      ...this.state.ingredients
    }
    console.log('updated ingridient', updatedIngredients);
      const oldIngredient = this.state.ingredients[type];
      if (oldIngredient <= 0) {
        return;
      }
      console.log('old ingridient', oldIngredient);
      const updatedIngredient = oldIngredient - 1;
      console.log('new ingridient', updatedIngredient);
      // store new ingredient value in object.
      updatedIngredients[type] = updatedIngredient;
      console.log('updated ingridient', updatedIngredients);
      // For price addition
      const priceDeduction = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDeduction;
      this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
      this.updatePurchasable(updatedIngredients);
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
  purchaseHandler = ()  => {
    this.setState({purchasing: true});
  }
  render () {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    let burger;
    if (this.state.ingredients) {
      burger = (
        <div>
        <Burger ingridient = {this.state.ingredients}></Burger>
        <BuildControls ingredientAdded = {this.addIngredientHandler}
        ingredientRemoved = {this.removeIngredientHandler}
        newPrice = {this.state.totalPrice}
        purchasable = {this.state.purchasable}
        ordered = {this.purchaseHandler}
        ingridients = {this.state.ingredients}></BuildControls>
        </div>
      );
    }
    return (
      <div>
        {burger}
      </div>
    );
  }
}
export default BurgerBuilder;
