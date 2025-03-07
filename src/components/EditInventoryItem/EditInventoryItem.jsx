import React from "react";
import { Link } from "react-router-dom";
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
    item_name,
    description,
    category,
    status,
    quantity,
    warehouse_name,
  },
}) {
  const [formData, setFormData] = useState({
    item_name: item_name || "",
    description: description || "",
    category: category || "",
    status: status || "",
    quantity: quantity || "",
    warehouse_name: warehouse_name || "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("form submitted!");
    console.log(formData);
    const response = await axios.put(
      `${backendUrl}/api/inventories/${id}`,
      formData
    );
    console.log(response);
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
              defaultValue={formData.item_name}
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
              defaultValue={formData.description}
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
            <div className="edit-inventory__buttons">
              <button
                type="button"
                className="edit-inventory__button edit-inventory__button--cancel"
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
          </div>
        </div>
      </form>
    </section>
  );
}

export default EditInventoryItem;
