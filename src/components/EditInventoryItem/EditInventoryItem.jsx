import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./EditInventoryItem.scss";
import BackIcon from "../../assets/icons/arrow-back-24px.svg";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const categories = ["Electronics", "Gear", "Apparel", "Accesories", "Health"];
const warehouses = [
	"Manhattan",
	"Washington",
	"Jersey",
	"SF",
	"Santa Monica",
	"Seattle",
	"Miami",
	"Boston",
];

function EditInventoryItem({
	inventoryItemDetails: {
		id,
		warehouse_id,
		item_name,
		description,
		category,
		status,
		quantity,
		warehouse_name,
	},
}) {
	const [formData, setFormData] = useState({
		warehouse_id: warehouse_id,
		item_name: item_name || "",
		description: description || "",
		category: category || "",
		status: status || "",
		quantity: quantity || 0,
		warehouse_name: warehouse_name || "",
	});

	const nav = useNavigate();
	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
			...(event.target.value === "Out Of Stock" && { quantity: 0 }),
			...(event.target.name = "quantity" &&
				event.target.value == "0" && { status: "Out Of Stock" }),
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.put(
				`${backendUrl}/api/inventories/${id}`,
				formData
			);
			console.log("Response:", response);
			if (response.status === 200) {
				alert("Inventory updated successfully!");
				nav("/inventory");
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			alert(
				"An error occurred while updating the inventory. Please try again."
			);
		}
	};

	const handleCancel = () => {
		nav("/inventory");
	};

	return (
		<section className="edit-inventory">
			<div className="edit-inventory__header">
				<Link to={`/inventory/${id}`}>
					<img
						src={BackIcon}
						alt="Back"
						className="edit-inventory__header-back"
					/>
				</Link>
				<h1 className="edit-inventory__title">Edit Inventory Item</h1>
			</div>

			<form className="edit-inventory__form" onSubmit={handleSubmit}>
				<div className="edit-inventory__form-container">
					<div className="edit-inventory__section">
						<h2 className="edit-inventory__section-title">Item Details</h2>
						<div className="edit-inventory__field">
							<label htmlFor="itemName" className="edit-inventory__label">
								Item Name
							</label>
							<input
								name="item_name"
								type="text"
								id="itemName"
								className="edit-inventory__input"
								placeholder="Item Name"
								value={formData.item_name}
								onChange={handleChange}
							/>
						</div>
						<div className="edit-inventory__field">
							<label htmlFor="description" className="edit-inventory__label">
								Description
							</label>
							<textarea
								name="description"
								id="description"
								className="edit-inventory__input edit-inventory__input--textarea"
								rows="4"
								placeholder="Enter item description"
								value={formData.description}
								onChange={handleChange}
							/>
						</div>
						<div className="edit-inventory__field">
							<label htmlFor="category" className="edit-inventory__label">
								Category
							</label>
							<select
								name="category"
								id="category"
								className="edit-inventory__input"
								defaultValue={formData.category}
								onChange={handleChange}
							>
								{categories.map((category) => (
									<option key={category} value={category}>
										{category}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="edit-inventory__section">
						<h2 className="edit-inventory__section-title">Item Availability</h2>
						<div className="edit-inventory__field edit-inventory__field--radio-group">
							<label className="edit-inventory__label">Status</label>
							<div className="edit-inventory__radios">
								<label className="edit-inventory__radio-label">
									<input
										type="radio"
										name="status"
										value="In Stock"
										checked={formData.status === "In Stock"}
										onChange={handleChange}
									/>
									<span>In stock</span>
								</label>
								<label className="edit-inventory__radio-label">
									<input
										type="radio"
										name="status"
										value="Out Of Stock"
										checked={formData.status === "Out Of Stock"}
										onChange={handleChange}
									/>
									<span>Out of stock</span>
								</label>
							</div>
						</div>
						<div
							className={`edit-inventory__field--qty ${
								formData.status === "In Stock" ? "display" : "none"
							}`}
						>
							<label htmlFor="quantity" className="edit-inventory__label">
								Quantity
							</label>
							<input
								name="quantity"
								type="number"
								id="quantity"
								className="edit-inventory__input"
								placeholder="QTY"
								value={formData.quantity}
								onChange={handleChange}
								min="0"
							/>
						</div>
						<div className="edit-inventory__field">
							<label htmlFor="warehouse" className="edit-inventory__label">
								Warehouse
							</label>
							<select
								name="warehouse"
								id="warehouse"
								className="edit-inventory__input"
								defaultValue={formData.warehouse_name}
								onChange={handleChange}
							>
								{warehouses.map((warehouse) => (
									<option key={warehouse} value={warehouse}>
										{warehouse}{" "}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
				<div className="edit-inventory__button-container">
					<button
						type="button"
						className="edit-inventory__button edit-inventory__button--cancel"
						onClick={handleCancel}
					>
						Cancel
					</button>
					<button
						type="submit"
						className="edit-inventory__button edit-inventory__button--save"
					>
						Save
					</button>
				</div>
			</form>
		</section>
	);
}

export default EditInventoryItem;
