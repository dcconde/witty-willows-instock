import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import WarehouseModifyDetails from "../WarehouseModifyDetails/WarehouseModifyDetails";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import Button from "../Button/Button";
import arrowBackIcon from "../../assets/icons/arrow-back-24px.svg";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { httpRequest } from "../../utils/axiosCalls";

import "./WarehouseModify.scss";

const WarehouseModify = ({
	pageTitle,
	exitPath,
	formSubmitBtnText,
	requestType,
	requestUrl,
	initialFetchDataUrl,
}) => {
	const navigate = useNavigate();
	const toastifyMsgs = {
		post: {
			success: `Warehouse created successfully!`,
			error: `Failed to create warehouse`,
		},
		put: {
			success: "Changes saved!",
			error: `Failed to save changes`,
		},
	};

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
					let newInput = { ...input };
					newInput.value = e.target.value;
					newInput.isEmpty = false;
					if (input.badEmail) newInput.badEmail = false;
					if (input.badPhone) newInput.badPhone = false;
					return newInput;
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

		//axios request to server
		try {
			const res = await httpRequest(requestType, requestUrl, warehouse);

			//check status code see if POST was successful
			if (res.status >= 200 && res.status < 300) {
				//show success toast
				toast.success(
					requestType === "post"
						? toastifyMsgs.post.success
						: toastifyMsgs.put.success,
					{
						position: "top-right",
						autoClose: 3000,
					}
				);
				console.log("Post successful:", res.data);
			} else {
				console.log("Unexpected response. Status:", res.status);
			}
		} catch (err) {
			//show error toast
			toast.error(
				requestType === "post"
					? toastifyMsgs.post.error
					: toastifyMsgs.put.error,
				{
					position: "top-right",
					autoClose: 3000,
				}
			);
			console.error("Post request failed:", err.message);
		} finally {
			navigate(exitPath);
		}
	};

	const handleCancel = () => {
		navigate(exitPath);
	};

	//fetch warehouse info if edit warehouse.
	const fetchWarehouse = async () => {
		try {
			const res = await httpRequest("get", initialFetchDataUrl);
			//console.log(res.data);
			setInputs(
				inputs.map((input) => ({
					...input,
					value: res.data[input.name] || "",
				}))
			);
			console.log(inputs);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		console.log(inputs);
		if (!initialFetchDataUrl) return;

		fetchWarehouse();
	}, []);

	return (
		<main className="warehouse-modify">
			{/* {console.log("renders...........", inputs)} */}
			<div className="warehouse-modify__header">
				<img
					className="warehouse-modify__arrow-back-icon"
					src={arrowBackIcon}
					alt="arrow back icon"
					onClick={handleCancel}
				/>
				<h1>{pageTitle}</h1>
			</div>
			<div className="warehouse-modify__form-wrapper">
				<form className="warehouse-modify__form" onSubmit={handleAddWarehouse}>
					<div className="warehouse-modify__main-wrapper">
						<WarehouseModifyDetails
							filterKeyWord="warehouse"
							inputs={inputs}
							handleOnChange={handleOnChange}
						/>
						<WarehouseModifyDetails
							filterKeyWord="contact"
							inputs={inputs}
							handleOnChange={handleOnChange}
						/>
					</div>
					<div className="warehouse-modify__button-wrapper">
						<Button
							type="button"
							className="button--cancel"
							handleClick={handleCancel}
						>
							<div className="button__text">
								<p>Cancel</p>
							</div>
						</Button>
						<Button type="submit" className="button--save">
							<div className="button__text">
								<p>{formSubmitBtnText}</p>
							</div>
						</Button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default WarehouseModify;
