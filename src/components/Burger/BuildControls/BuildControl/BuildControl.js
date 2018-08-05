import React from 'react';
import './BuildControl.css';
const BuildControl = (props) => (
    <div className="BuildControl">
      <div className="Label">{props.name}</div>
      <button className="Less">Less</button>
      <button className="More" onClick ={props.added} >More</button>
    </div>
);
export default BuildControl;
