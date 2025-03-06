import React from "react";
import "./InputWithLabel.scss";

const InputWithLabel = ({ handleOnChange, inputObj, className, children }) => {
	return (
		<div className="input">
			<label className="input__label">
				<p>{inputObj.label}</p>
				<input
					type="text"
					className={`input__input ${className}`}
					value={inputObj.value}
					name={inputObj.name}
					placeholder={inputObj.label}
					onChange={handleOnChange}
				/>
			</label>
			{children}
		</div>
	);
};

export default InputWithLabel;
