/* import "./InventoryAddPage.scss";
import BackIcon from "../../assets/icons/arrow-back-24px.svg";

function InventoryAddPage () {
    return (
      <section className="add-inventory">
            <div className="add-inventory__header">
              <img
                src={BackIcon}
                alt="Back"
                className="add-inventory__header-back"
              />
              <h1 className="add-inventory__title">Edit Inventory Item</h1>
            </div>
      
            <form
              className="add-inventory__form"
              onSubmit={(e) => e.preventDefault()}
            >
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
                  />
                </div>
      
                <div className="add-inventory__field">
                  <label htmlFor="category" className="add-inventory__label">
                    Category
                  </label>
                  <select id="category" className="add-inventory__input">
                    <option value="Electronics">Electronics</option>
                    <option value="Appliances">Appliances</option>
                    <option value="Furniture">Furniture</option>
                  </select>
                </div>
              </div>
      
              <div className="add-inventory__section">
                <h2 className="add-inventory__section-title">Item Availability</h2>
      
                <div className="add-inventory__field add-inventory__field--radio-group">
                  <label className="add-inventory__label">Status</label>
                  <div className="add-inventory__radios">
                    <label className="add-inventory__radio-label">
                      <input
                        type="radio"
                        name="status"
                        value="inStock"
                        defaultChecked
                      />
                      <span>In stock</span>
                    </label>
                    <label className="add-inventory__radio-label">
                      <input type="radio" name="status" value="outOfStock" />
                      <span>Out of stock</span>
                    </label>
                  </div>
                </div>
      
                <div className="add-inventory__field">
                  <label htmlFor="warehouse" className="add-inventory__label">
                    Warehouse
                  </label>
                  <select id="warehouse" className="add-inventory__input">
                    <option value="Manhattan">Manhattan</option>
                    <option value="Brooklyn">Brooklyn</option>
                    <option value="Queens">Queens</option>
                  </select>
                </div>
              </div>
            </form>
      
            <div className="add-inventory__buttons">
              <button
                type="button"
                className="add-inventory__button add-inventory__button--cancel"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="add-inventory__button add-inventory__button--save"
              >
                Save
              </button>
            </div>
          </section>
    )
}

export default InventoryAddPage; */

import { useNavigate } from "react-router-dom";
import "./InventoryAddPage.scss";
import BackIcon from "../../assets/icons/arrow-back-24px.svg";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function InventoryAddPage() {
  const navigate = useNavigate();


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

      <form
        className="add-inventory__form"
        onSubmit={(e) => e.preventDefault()}
      >
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
            />
          </div>

          <div className="add-inventory__field">
            <label htmlFor="category" className="add-inventory__label">
              Category
            </label>
            <select id="category" className="add-inventory__input">
              <option value="Electronics">Electronics</option>
              <option value="Appliances">Appliances</option>
              <option value="Furniture">Furniture</option>
            </select>
          </div>
        </div>

        <div className="add-inventory__section">
          <h2 className="add-inventory__section-title">Item Availability</h2>

          <div className="add-inventory__field add-inventory__field--radio-group">
            <label className="add-inventory__label">Status</label>
            <div className="add-inventory__radios">
              <label className="add-inventory__radio-label">
                <input
                  type="radio"
                  name="status"
                  value="inStock"
                  defaultChecked
                />
                <span>In stock</span>
              </label>
              <label className="add-inventory__radio-label">
                <input type="radio" name="status" value="outOfStock" />
                <span>Out of stock</span>
              </label>
            </div>
          </div>

          <div className="add-inventory__field">
            <label htmlFor="warehouse" className="add-inventory__label">
              Warehouse
            </label>
            <select id="warehouse" className="add-inventory__input">
              <option value="Manhattan">Manhattan</option>
              <option value="Brooklyn">Brooklyn</option>
              <option value="Queens">Queens</option>
            </select>
          </div>
        </div>
      </form>

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
    </section>
  );
}

export default InventoryAddPage;
