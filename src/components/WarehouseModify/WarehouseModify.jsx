import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import Button from "../Button/Button";
import arrowBackIcon from "../../assets/icons/arrow-back-24px.svg";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import "./WarehouseModify.scss";

const WarehouseModify = () => {
	const inputsStructure = [
		{
			name: "warehouse_name",
			label: "Warehouse Name",
			value: "",
			type: "text",
			category: "warehouse",
			errorInput: false,
		},
		{
			name: "address",
			label: "Street Address",
			value: "",
			type: "text",
			category: "warehouse",
			errorInput: false,
		},
		{
			name: "city",
			label: "City",
			value: "",
			type: "text",
			category: "warehouse",
			errorInput: false,
		},
		{
			name: "country",
			label: "Country",
			value: "",
			type: "text",
			category: "warehouse",
			errorInput: false,
		},
		{
			name: "contact_name",
			label: "Contact Name",
			value: "",
			type: "text",
			category: "contact",
			errorInput: false,
		},
		{
			name: "contact_position",
			label: "Position",
			value: "",
			type: "text",
			category: "contact",
			errorInput: false,
		},
		{
			name: "contact_phone",
			label: "Phone Number",
			value: "",
			type: "text",
			category: "contact",
			errorInput: false,
		},
		{
			name: "contact_email",
			label: "Email",
			value: "",
			type: "text",
			category: "contact",
			errorInput: false,
		},
	];

	//const { warehouseId } = useParams();
	//console.log(warehouseId);

	const [inputs, setInputs] = useState(inputsStructure);

	const handleOnChange = (e) => {
		setInputs((pre) => {
			let newInputs = [];
			for (let input of pre) {
				if (input.name === e.target.name) {
					newInputs.push({
						...input,
						value: e.target.value,
						errorInput: false,
					});
				} else newInputs.push(input);
			}
			//console.log(newInputs);
			return newInputs;
		});
	};

	//check valid email

	//check valid phone number

	const setInvalidInputs = () => {
		setInputs(
			inputs?.map((input) => {
				if (!input.value.trim()) {
					input.errorInput = true;
				}
				return input;
			})
		);
	};

	const handleAddWarehouse = (e) => {
		e.preventDefault();
		setInvalidInputs();
		console.log(inputs);
	};

	const handleCancel = () => {};

	return (
		<main className="warehouse-modify">
			{console.log(inputs)}
			<div className="warehouse-modify__title">
				<img src={arrowBackIcon} alt="arrow back icon" />
				<h1>Add New Warehouse</h1>
			</div>
			<form className="warehouse-modify__form" onSubmit={handleAddWarehouse}>
				<div className="warehouse-modify__main-wrapper">
					<div className="warehouse-modify__detail-wrapper">
						{inputs
							.filter((input) => input.category === "warehouse")
							.map((input, i) => (
								<div key={i}>
									<InputWithLabel
										handleOnChange={handleOnChange}
										inputObj={input}
										className={input.errorInput ? "input__input--error" : ""}
									>
										{input.errorInput && <ErrorMessage />}
									</InputWithLabel>
								</div>
							))}
					</div>
					<div className="warehouse-modify__detail-wrapper">
						{inputs
							.filter((input) => input.category === "contact")
							.map((input, i) => (
								<div key={i}>
									<InputWithLabel
										handleOnChange={handleOnChange}
										inputObj={input}
										className={input.errorInput ? "input__input--error" : ""}
									>
										{input.errorInput && <ErrorMessage />}
									</InputWithLabel>
								</div>
							))}
					</div>
				</div>
				<div className="warehouse-modify__button-wrapper">
					<Button className="button--cancel">
						<div className="button__text">
							<p>Cancel</p>
						</div>
					</Button>
					<Button
						type="submit"
						className="button--save"
						handleAddWarehouse={handleAddWarehouse}
					>
						<div className="button__text">
							<p>+ Add Warehouse</p>
						</div>
					</Button>
				</div>
			</form>
		</main>
	);
};

export default WarehouseModify;
