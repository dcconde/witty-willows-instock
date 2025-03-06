import React from "react";

const Button = ({ type, children }) => {
	return (
		<button type={type || ""} className="Button">
			{children}
		</button>
	);
};

export default Button;
