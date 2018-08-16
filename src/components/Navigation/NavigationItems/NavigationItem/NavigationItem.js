import React from 'react';
import './NavigationItem.css';
const NavigationItem = (props) => (
  <ul className = "NavigationItem">
    <li> <a href = {props.link}>{props.children}</a></li>
  </ul>
);
export default NavigationItem;
