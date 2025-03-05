import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import Button from "../Button/Button";
import arrowBackIcon from "../../assets/icons/arrow-back-24px.svg";
import "./WarehouseModify.scss";

const WarehouseModify = () => {
	const inputsStructure = [
		{
			name: "warehouse_name",
			label: "Warehouse Name",
			value: "",
			type: "text",
			category: "warehouse",
		},
		{
			name: "address",
			label: "Street Address",
			value: "",
			type: "text",
			category: "warehouse",
		},
		{
			name: "city",
			label: "City",
			value: "",
			type: "text",
			category: "warehouse",
		},
		{
			name: "country",
			label: "Country",
			value: "",
			type: "text",
			category: "contact",
		},
		{
			name: "contact_name",
			label: "Contact Name",
			value: "",
			type: "text",
			category: "contact",
		},
		{
			name: "contact_position",
			label: "Position",
			value: "",
			type: "text",
			category: "contact",
		},
		{
			name: "contact_phone",
			label: "Phone Number",
			value: "",
			type: "text",
			category: "contact",
		},
		{
			name: "contact_email",
			label: "Email",
			value: "",
			type: "email",
			category: "warehouse",
		},
	];

	const { warehouseId } = useParams();
	console.log(warehouseId);
	const [inputs, setInputs] = useState(inputsStructure);

	const handleOnChange = (e) => {
		console.log(e.target.value);
		setInputs((pre) => {
			let newInputs = [];
			for (let input of pre) {
				if (input.name === e.target.name) {
					newInputs.push({ ...input, ["value"]: e.target.value });
				} else newInputs.push(input);
			}
			//console.log(newInputs);
			return newInputs;
		});
	};

	const handleCancel = () => {};

	const handleAddWarehouse = () => {};

	return (
		<main className="warehouse-modify">
			<div className="warehouse-modify__title">
				<img src={arrowBackIcon} alt="arrowBackIcon" />
				<h1>Add New Warehouse</h1>
			</div>
			<form className="warehouse-modify__form">
				<div className="warehouse-modify__main-wrapper">
					<div className="warehouse-modify__detail-wrapper">
						{inputs
							.filter((input) => input.category === "warehouse")
							.map((input, i) => (
								<div key={i}>
									<InputWithLabel
										handleOnChange={handleOnChange}
										inputObj={input}
									/>
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
									/>
								</div>
							))}
					</div>
				</div>
				<div className="warehouse-modify__button-wrapper">
					<Button>
						<p>Cancel</p>
					</Button>
					<Button type="submit">
						<p>+ Add Warehouse</p>
					</Button>
				</div>
			</form>
		</main>
	);
};

export default WarehouseModify;
