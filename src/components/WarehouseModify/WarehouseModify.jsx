import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import Button from "../Button/Button";
import arrowBackIcon from "../../assets/icons/arrow-back-24px.svg";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { postRequest } from "../../../utility/axiosCalls";

import "./WarehouseModify.scss";

const { VITE_SERVER_URL, VITE_PORT } = import.meta.env;

const WarehouseModify = ({ pageTitle }) => {
	const inputsStructure = [
		{
			name: "warehouse_name",
			label: "Warehouse Name",
			value: "",
			type: "text",
			category: "warehouse",
			isEmpty: false,
		},
		{
			name: "address",
			label: "Street Address",
			value: "",
			type: "address",
			category: "warehouse",
			isEmpty: false,
		},
		{
			name: "city",
			label: "City",
			value: "",
			type: "address",
			category: "warehouse",
			isEmpty: false,
		},
		{
			name: "country",
			label: "Country",
			value: "",
			type: "address",
			category: "warehouse",
			isEmpty: false,
		},
		{
			name: "contact_name",
			label: "Contact Name",
			value: "",
			type: "text",
			category: "contact",
			isEmpty: false,
		},
		{
			name: "contact_position",
			label: "Position",
			value: "",
			type: "text",
			category: "contact",
			isEmpty: false,
		},
		{
			name: "contact_phone",
			label: "Phone Number",
			value: "",
			type: "tel",
			category: "contact",
			isEmpty: false,
		},
		{
			name: "contact_email",
			label: "Email",
			value: "",
			type: "email",
			category: "contact",
			isEmpty: false,
		},
	];

	const [inputs, setInputs] = useState(inputsStructure);

	const handleOnChange = (e) => {
		setInputs((pre) =>
			pre.map((input) => {
				if (input.name === e.target.name) {
					input.value = e.target.value;
					input.isEmpty = false;
					if (input.badEmail) input.badEmail = false;
					if (input.badPhone) input.badPhone = false;
				}
				return input;
			})
		);
	};

	//check valid email
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	//check valid phone number
	const phoneRegex =
		/^\+?(\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

	const isValidEmail = (email) => emailRegex.test(email);
	const isValidPhone = (phone) => phoneRegex.test(phone);

	const areInvalidInputs = () => {
		let validInputs = true;
		setInputs(
			inputs?.map((input) => {
				let trimmedInput = input.value.trim();
				if (!trimmedInput) {
					input.isEmpty = true;
					validInputs = false;
				}
				if (input.type === "email" && !isValidEmail(trimmedInput)) {
					input.badEmail = true;
					validInputs = false;
				}
				if (input.type === "tel" && !isValidPhone(trimmedInput)) {
					input.badPhone = true;
					validInputs = false;
				}
				return input;
			})
		);
		return validInputs;
	};

	const createWarehouseObj = () => {
		return inputs.reduce((total, item) => {
			total[item.name] = item.value.trim();
			return total;
		}, {});
	};

	const handleAddWarehouse = async (e) => {
		e.preventDefault();

		const validInputs = areInvalidInputs();
		//console.log(validInputs);
		if (!validInputs) {
			console.log("User entered invalid input(s).");
			return;
		}
		//create an object
		const warehouse = createWarehouseObj();

		//axios.post to server
		try {
			const res = await postRequest(
				VITE_SERVER_URL,
				VITE_PORT,
				"/api/warehouses/add",
				warehouse
			);

			//check status code see if POST was successful
			if (res.status === 201) {
				toast.success("Item added successfully!", {
					position: "top-right",
					autoClose: 3000,
				});
				console.log("Post successful:", res.data);
			} else {
				console.log("Unexpected response. Status:", res.status);
				toast.error("Adding was unsuccessful", {
					position: "top-right",
					autoClose: 3000,
				});
			}
		} catch (err) {
			console.error("Post request failed:", err.message);
		}
	};

	const handleCancel = () => {};

	return (
		<main className="warehouse-modify">
			{/* {console.log("renders...........", inputs)} */}
			<div className="warehouse-modify__title">
				<img src={arrowBackIcon} alt="arrow back icon" />
				<h1>{pageTitle}</h1>
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
					<div className="warehouse-modify__detail-wrapper">
						{inputs
							.filter((input) => input.category === "contact")
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
