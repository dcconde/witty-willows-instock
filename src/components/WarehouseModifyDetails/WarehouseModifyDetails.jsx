import React from "react";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./WarehouseModifyDetails.scss";

const WarehouseModifyDetails = ({
  title,
  filterKeyWord,
  inputs,
  handleOnChange,
}) => {
  return (
    <main className="warehouse-modify-details">
      <h2>{title}</h2>
      <div className="warehouse-modify-details__wrapper">
        {inputs
          .filter((input) => input.category === filterKeyWord)
          .map((input, i) => (
            <div key={i}>
              <InputWithLabel
                handleOnChange={handleOnChange}
                inputObj={input}
                className={input.isEmpty ? "input__input--error" : ""}
              >
                {input.isEmpty && (
                  <ErrorMessage message="This field is required" />
                )}
                {input.badEmail && (
                  <ErrorMessage message="Please enter a valid email" />
                )}
                {input.badPhone && (
                  <ErrorMessage message="Please enter a valid phone number" />
                )}
              </InputWithLabel>
            </div>
          ))}
      </div>
    </main>
  );
};

export default WarehouseModifyDetails;
