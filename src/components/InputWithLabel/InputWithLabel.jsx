import React from "react";
import "./InputWithLabel.scss";

const InputWithLabel = ({ handleOnChange, inputObj }) => {
	return (
		<div className="input">
			<label className="input__label">
				<p>{inputObj.label}</p>
				<input
					type={inputObj.type}
					className="input__input"
					value={inputObj.value}
					placeholder={inputObj.label}
					onChange={handleOnChange}
				/>
			</label>
			<p className="input__error-message"></p>
		</div>
	);
};

export default InputWithLabel;
