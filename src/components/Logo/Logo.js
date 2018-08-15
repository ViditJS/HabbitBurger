import React from 'react';
import BurgerLogo from '../../Assets/Images/burger-logo.png';
import './Logo.css'
const Logo = (props) => (
  <div className = "Logo">
    <img src = {BurgerLogo} alt='HabbitBurger'/>
  </div>
);
export default Logo;
