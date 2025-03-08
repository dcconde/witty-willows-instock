import React from "react";
import "./Button.scss";

const Button = ({ type, className, handleClick = () => {}, children }) => {
  return (
    <button
      type={type || "button"}
      className={`button ${className || ""}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
