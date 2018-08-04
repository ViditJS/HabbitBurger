import React from 'react';
import './Burger.css';
import BurgerIngridient from '../BurgerIngridient/BurgerIngridient';
class Burger extends React.Component {
  render() {
  let transformedIngredients = Object.keys(this.props.ingridient).map (
    Keys => {
      return [...Array(this.props.ingridient[Keys])].map( (_, i) => {
        return <BurgerIngridient key = {Keys + i} type = {Keys} />;
      });
    }).reduce((arr, el) => {
      return arr.concat(el)
    }, []);
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
