import React from 'react';
import './Burger.css';
import BurgerIngridient from '../BurgerIngridient/BurgerIngridient';
class Burger extends React.Component {
  render() {

     console.log('Burger', this.props.ingridient);
  // Convert object into array so that we can use map and iterator through it.
  // Object.keys - extract key from objects.

    let transformedIngredients = Object.keys(this.props.ingridient).map (
      Keys => {
        return [...Array(this.props.ingridient[Keys])].map( (_, i) => {
          return <BurgerIngridient key = {Keys + i} type = {Keys} />;
        });
      }).reduce((arr, el) => {
        return arr.concat(el)
      }, []);
    // If ingredients are empty, it shows message please add ingredients.
    if (!transformedIngredients.length) {
      transformedIngredients = <p> Please start adding ingredients!</p>
    }
    return (
      <div className="Burger">
        <BurgerIngridient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngridient type="bread-bottom"/>
      </div>
    );
  }
}
export default Burger;
