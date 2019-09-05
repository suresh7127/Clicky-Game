import React from "react";
import "./wrapper.css";

//stateless component
const wrapper = props => <div className="wrapper">{props.children}</div>;

export default wrapper;