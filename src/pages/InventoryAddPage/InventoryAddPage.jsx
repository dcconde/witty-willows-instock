import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./InventoryAddPage.scss";
import BackIcon from "../../assets/icons/arrow-back-24px.svg";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function InventoryAddPage() {
  const navigate = useNavigate();

  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("null");
  const [status, setStatus] = useState("inStock");
  const [warehouse, setWarehouse] = useState("Manhattan");
  const [quantity, setQuantity] = useState(0); // New state for quantity
  const [warehouseId, setWarehouseId] = useState("null");
  const [warehouseDropdown, setWarehouseDropdown] = useState([]);
  const [inventoriesDropdown, setInventoriesDropdown] = useState([]);

  const getWarehouses = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/warehouses`);
      setWarehouseDropdown(response.data);
    } catch (err) {
      console.error("Error getting warehouses", err);
    }
  };

  useEffect(() => {
    getWarehouses();
  }, []);

  const getInventories = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/inventories`);
      setInventoriesDropdown(response.data);
    } catch (err) {
      console.error("Error getting inventories", err);
    }
  };

  useEffect(() => {
    getInventories();
  }, []);

  function handleChangeItemName(event) {
    setItemName(event.target.value);
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

  function handleChangeCategory(event) {
    setCategory(event.target.value);
  }

  function handleChangeStatus(event) {
    setStatus(event.target.value);
  }

  function handleChangeWarehouse(event) {
    setWarehouse(event.target.value);
    setWarehouseId(
      warehouseDropdown.find((w) => w.warehouse_name === event.target.value)
        ?.id || ""
    );
  }

  function handleChangeQuantity(event) {
    setQuantity(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!itemName || !description) {
      alert("Please fill in all required fields.");
      return;
    }

    const newItem = {
      warehouse_id: warehouseId,
      item_name: itemName,
      description: description,
      category: category,
      status: status,
      quantity: status === "inStock" ? quantity : 0,
    };

    try {
      const response = await axios.post(
        `${backendUrl}/api/inventories`,
        newItem
      );
      console.log("Item added:", response.data);
      alert("Item successfully added!");
      navigate("/inventory");
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Failed to add item. Please try again.");
    }
  }

  return (
    <section className="add-inventory">
      <div className="add-inventory__header">
        <img
          src={BackIcon}
          alt="Back"
          className="add-inventory__header-back"
          onClick={() => navigate(-1)}
        />
        <h1 className="add-inventory__title"> Add New Inventory Item</h1>
      </div>

      <form className="add-inventory__form" onSubmit={handleSubmit}>
        <div className="add-inventory__form-container">
          <div className="add-inventory__section">
            <h2 className="add-inventory__section-title">Item Details</h2>

            <div className="add-inventory__field">
              <label htmlFor="itemName" className="add-inventory__label">
                Item Name
              </label>
              <input
                type="text"
                id="itemName"
                className="add-inventory__input"
                placeholder="Item Name"
                value={itemName}
                onChange={handleChangeItemName}
                required
              />
            </div>

            <div className="add-inventory__field">
              <label htmlFor="description" className="add-inventory__label">
                Description
              </label>
              <textarea
                id="description"
                className="add-inventory__input add-inventory__input--textarea"
                rows="4"
                placeholder="Enter item description"
                value={description}
                onChange={handleChangeDescription}
                required
              />
            </div>

            <div className="add-inventory__field">
              <label htmlFor="category" className="add-inventory__label">
                Category
              </label>
              <select
                id="category"
                className="add-inventory__input"
                value={category}
                onChange={handleChangeCategory}
              >
                {[
                  ...new Set(
                    inventoriesDropdown.map((inventory) => inventory.category)
                  ),
                ].map((uniqueCategory, index) => (
                  <option key={index} value={uniqueCategory}>
                    {uniqueCategory}
                  </option>
                ))}
              </select>
            </div>

            <div className="add-inventory__section">
              <h2 className="add-inventory__section-title">
                Item Availability
              </h2>

              <div className="add-inventory__field add-inventory__field--radio-group">
                <label className="add-inventory__label">Status</label>
                <div className="add-inventory__radios">
                  <label className="add-inventory__radio-label">
                    <input
                      type="radio"
                      name="status"
                      value="inStock"
                      checked={status === "inStock"}
                      onChange={handleChangeStatus}
                    />
                    <span>In stock</span>
                  </label>
                  <label className="add-inventory__radio-label">
                    <input
                      type="radio"
                      name="status"
                      value="outOfStock"
                      checked={status === "outOfStock"}
                      onChange={handleChangeStatus}
                    />
                    <span>Out of stock</span>
                  </label>
                </div>
              </div>

              {status === "inStock" && (
                <div className="add-inventory__field">
                  <label htmlFor="quantity" className="add-inventory__label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    className="add-inventory__input"
                    placeholder="Enter quantity"
                    value={quantity}
                    onChange={handleChangeQuantity}
                    required
                    min="1"
                  />
                </div>
              )}

              <div className="add-inventory__field">
                <label htmlFor="warehouse" className="add-inventory__label">
                  Warehouse
                </label>
                <select
                  id="warehouse"
                  className="add-inventory__input"
                  value={warehouse}
                  onChange={handleChangeWarehouse}
                >
                  {[
                    ...new Set(
                      warehouseDropdown?.map(
                        (warehouse) => warehouse.warehouse_name
                      )
                    ),
                  ].map((warehouse, index) => (
                    <option key={index} value={warehouse}>
                      {warehouse}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="add-inventory__buttons">
              <button
                type="button"
                className="add-inventory__button add-inventory__button--cancel"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="add-inventory__button add-inventory__button--save"
              >
                + Add Item
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default InventoryAddPage;
