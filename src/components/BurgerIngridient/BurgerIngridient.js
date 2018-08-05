import React from 'react';
import './BurgerIngridient.css';
//stateless component
class BurgerIngridient extends React.Component {
  render(){
    let ingridient = null;
    switch(this.props.type) {
      case 'bread-bottom':
        ingridient = <div className="BreadBottom"></div>;
      break;
      case 'bread-seeds':
        ingridient = <div className="Seeds1"></div>
      break;
      case 'bread-top':
        ingridient = <div className="BreadTop"></div>
      break;
      case 'meat':
        ingridient = <div className="Meat"></div>
      break;
      case 'bacon':
        ingridient = <div className="Bacon"></div>
      break;
      case 'salad':
        ingridient = <div className="Salad"></div>
      break;
      case 'cheese':
        ingridient = <div className="Cheese"></div>
      break;
      default:
        ingridient = null;
    }
    return ingridient;
  }
};
export default BurgerIngridient;
