import React from "react";
import errorIcon from "../../assets/icons/error-24px.svg";
import "./ErrorMessage.scss";

const ErrorMessage = ({ message }) => {
  return (
    <div className="error">
      <img className="error__icon" src={errorIcon} alt="error icon" />
      <p className="error__msg">{message}</p>
    </div>
  );
};

export default ErrorMessage;
