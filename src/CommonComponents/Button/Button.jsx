import React from "react";
import './Button.css'

const Button = ({ buttonType, method, children, disabled, type }) => {
  return (
    <button className={"btn " + buttonType} onClick={method} type={type} disabled={disabled}>
      {children}
    </button>
  );
};
export default Button;
