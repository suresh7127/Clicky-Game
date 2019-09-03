import React from "react";
import "./header.css";
import Arrow from 'react-icons/lib/fa/caret-right';

//stateless component
const header = props => (
  <div className="scoreBoard">
    <h3 className="header">Your Score <Arrow /> {props.total}</h3>
    <h3 className="status">{props.status}</h3>
  </div>
);

export default header;