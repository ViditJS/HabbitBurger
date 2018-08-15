import React from 'react';
const Button = (props) => (
  <button
    onClick={props.clicked}>{props.child}
  </button>
);
export default Button;
