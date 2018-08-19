import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem'
const NavigationItems = (props) => (
  <ul className = "NavigationItems">
    <NavigationItem link = '/' active>BurgerBuilder</NavigationItem>
    <NavigationItem link = '/Orders'>Orders</NavigationItem>
  </ul>
);
export default NavigationItems;
