import "./InventoryList.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import chevronIcon from "../../assets/icons/chevron-right-24px.svg";
import deleteIcon from "../../assets/icons/delete-outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function InventoryList({ inventoriesData }) {
  return (
    <section className="inventories-list">
      <h1 className="inventories-list__title">Inventory</h1>
      <div className="inventories-list__search">
        <input
          type="text"
          name="searchInput"
          className="inventories-list__search-input"
          placeholder="Search..."
        />
        <img
          src={searchIcon}
          alt="search icon"
          className="inventories-list__search-icon"
        />
      </div>
      <button className="inventories-list__btn">+ Add New Item</button>
      <ul className="inventories-list__list">
        {inventoriesData.map(
          ({ id, warehouse_name, item_name, category, status, quantity }) => (
            <li key={id} className="inventories-list__item">
              <div className="inventories-list__info">
                <div className="inventories-list__section">
                  <h4 className="inventories-list__section-title">
                    Inventory Item
                  </h4>
                  <h3 className="inventories-list__item-name">{item_name}</h3>
                  <img
                    src={chevronIcon}
                    alt="chevron icon"
                    className="inventories-list__chevron-icon"
                  />
                </div>
                <div className="inventories-list__section">
                  <h4 className="inventories-list__section-title">Category</h4>
                  <h3 className="inventories-list__item-category">
                    {category}
                  </h3>
                </div>
                <div className="inventories-list__section">
                  <h4 className="inventories-list__section-title">Status</h4>
                  <h3 className="inventories-list__item-status">{status}</h3>
                </div>
                <div className="inventories-list__section">
                  <h4 className="inventories-list__section-title">QTY</h4>
                  <h3 className="inventories-list__item-qty">{quantity}</h3>
                </div>
                <div className="inventories-list__section">
                  <h4 className="inventories-list__section-title">Warehouse</h4>
                  <h3 className="inventories-list__item-warehouse">
                    {warehouse_name}
                  </h3>
                </div>
                <div className="inventories-list__section">
                  <h4 className="inventories-list__section-title">Actions</h4>
                  <img
                    src={deleteIcon}
                    alt="delete icon"
                    className="inventories-list__delete-icon"
                  />
                  <img
                    src={editIcon}
                    alt="edit icon"
                    className="inventories-list__edit-icon"
                  />
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export default InventoryList;
