import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal.js';
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery';
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.75,
  cheese: 1,
  meat: 0.75
}
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false
  }
  // Total amount of burger
  updatePurchasable (ingredients) {
    const sum = Object.keys(ingredients).map(
      key => {
        return ingredients[key];
      }).reduce((sum, el) => {
        return sum + el;
      },0);
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
  render () {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <div>
        <Modal> <OrderSummery ingridients = {this.state.ingredients}/> </Modal>
        <Burger ingridient = {this.state.ingredients}/>
        <BuildControls ingredientAdded = {this.addIngredientHandler}
        ingredientRemoved = {this.removeIngredientHandler}
        newPrice = {this.state.totalPrice}
        purchasable = {this.state.purchasable}/>
      </div>
    );
  }
}
export default BurgerBuilder;
