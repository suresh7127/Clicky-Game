import React from "react";
import "./Wrapper.css";

//stateless component
const wrapper = props => <div className="wrapper">{props.children}</div>;

export default wrapper;