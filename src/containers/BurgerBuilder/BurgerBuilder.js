import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
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
    totalPrice: 4
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
  }
  // removeIngredientHandler = (type) => {
  //
  // }
  render () {
    return (
      <div>
        <Burger ingridient = {this.state.ingredients}/>
        <BuildControls ingredientAdded = {this.addIngredientHandler}/>
      </div>
    );
  }
}
export default BurgerBuilder;
