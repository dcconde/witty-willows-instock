import React from "react";
import "./EditInventoryItem.scss";
import BackIcon from "../../assets/icons/arrow-back-24px.svg";

function EditInventoryItem({
  inventoryItemDetails: {
    item_name,
    description,
    category,
    status,
    quantity,
    warehouse_name,
  },
}) {
  return (
    <section className="edit-inventory">
      <div className="edit-inventory__header">
        <img
          src={BackIcon}
          alt="Back"
          className="edit-inventory__header-back"
        />
        <h1 className="edit-inventory__title">Edit Inventory Item</h1>
      </div>

      <form
        className="edit-inventory__form"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="edit-inventory__section">
          <h2 className="edit-inventory__section-title">Item Details</h2>

          <div className="edit-inventory__field">
            <label htmlFor="itemName" className="edit-inventory__label">
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              className="edit-inventory__input"
              placeholder="Item Name"
              defaultValue={item_name}
            />
          </div>

          <div className="edit-inventory__field">
            <label htmlFor="description" className="edit-inventory__label">
              Description
            </label>
            <textarea
              id="description"
              className="edit-inventory__input edit-inventory__input--textarea"
              rows="4"
              placeholder="Enter item description"
              defaultValue={description}
            />
          </div>

          <div className="edit-inventory__field">
            <label htmlFor="category" className="edit-inventory__label">
              Category
            </label>
            <select id="category" className="edit-inventory__input">
              <option value="Electronics">Electronics</option>
              <option value="Appliances">Appliances</option>
              <option value="Furniture">Furniture</option>
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
                  value="inStock"
                  defaultChecked
                />
                <span>In stock</span>
              </label>
              <label className="edit-inventory__radio-label">
                <input type="radio" name="status" value="outOfStock" />
                <span>Out of stock</span>
              </label>
            </div>
          </div>

          <div className="edit-inventory__field">
            <label htmlFor="warehouse" className="edit-inventory__label">
              Warehouse
            </label>
            <select id="warehouse" className="edit-inventory__input">
              <option value="Manhattan">Manhattan</option>
              <option value="Brooklyn">Brooklyn</option>
              <option value="Queens">Queens</option>
            </select>
          </div>
        </div>
      </form>

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
    </section>
  );
}

export default EditInventoryItem;
