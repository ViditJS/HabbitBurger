import React from 'react';
import BurgerLogo from '../../Assets/Images/burger-logo.png';
import './Logo.css'
const Logo = (props) => (
  <div className = "Logo" style={{height: props.height}}>
    <img src = {BurgerLogo} alt='HabbitBurger'/>
  </div>
);
export default Logo;
