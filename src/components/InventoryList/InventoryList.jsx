import { Link } from "react-router-dom";
import "./InventoryList.scss";
import SearchBar from "../SearchBar/SearchBar";
import chevronIcon from "../../assets/icons/chevron-right-24px.svg";
import deleteIcon from "../../assets/icons/delete-outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import StatusTags from "../StatusTags/StatusTags";
import TableHeader from "../TableHeader/TableHeader";

function InventoryList({ inventoriesData }) {
  const headerItems = [
    "Inventory item",
    "Category",
    "Status",
    "Qty",
    "Warehouse",
    "Actions",
  ];

  return (
    <section className="inventories-list">
      <div className="inventories-list__top-container">
        <h1 className="inventories-list__title">Inventory</h1>
        <SearchBar />
        <div className="inventories-list__btn-container">
          <button className="inventories-list__btn">+ Add New Item</button>
        </div>
      </div>
      <section className="inventories-list__header">
        <div className="inventories-list__header-item">
          <h4 className="inventories-list__header-title">Inventory Item</h4>
          <img
            src={sortIcon}
            alt="sort icon"
            className="inventories-list__sort-icon"
          />
        </div>
        <div className="inventories-list__header-item">
          <h4 className="inventories-list__header-title">Category</h4>
          <img
            src={sortIcon}
            alt="sort icon"
            className="inventories-list__sort-icon"
          />
        </div>
        <div className="inventories-list__header-item">
          <h4 className="inventories-list__header-title">Status</h4>
          <img
            src={sortIcon}
            alt="sort icon"
            className="inventories-list__sort-icon"
          />
        </div>
        <div className="inventories-list__header-item">
          <h4 className="inventories-list__header-title">Qty</h4>
          <img
            src={sortIcon}
            alt="sort icon"
            className="inventories-list__sort-icon"
          />
        </div>
        <div className="inventories-list__header-item">
          <h4 className="inventories-list__header-title">Warehouse</h4>
          <img
            src={sortIcon}
            alt="sort icon"
            className="inventories-list__sort-icon"
          />
        </div>
        <div className="inventories-list__header-item">
          <h4 className="inventories-list__header-title">Actions</h4>
        </div>
      </section>
      <ul className="inventories-list__list">
        {inventoriesData.map(
          ({ id, warehouse_name, item_name, category, status, quantity }) => (
            <li key={id} className="inventories-list__item">
              <div className="inventories-list__info">
                <div className="inventories-list__section">
                  <h4 className="inventories-list__section-title">
                    Inventory Item
                  </h4>
                  <div className="inventories-list__inventory-container">
                    <Link
                      to={`/inventory/${id}`}
                      className="inventories-list__link"
                    >
                      <h3 className="inventories-list__inventory-name">
                        {item_name}
                      </h3>
                    </Link>
                    <img
                      src={chevronIcon}
                      alt="chevron icon"
                      className="inventories-list__inventory-icon"
                    />
                  </div>
                </div>
                <div className="inventories-list__section">
                  <h4 className="inventories-list__section-title">Category</h4>
                  <p className="inventories-list__item-category">{category}</p>
                </div>
                <div className="inventories-list__section">
                  <h4 className="inventories-list__section-title">Status</h4>
                  <StatusTags status={status} />
                </div>
                <div className="inventories-list__section">
                  <h4 className="inventories-list__section-title">QTY</h4>
                  <p className="inventories-list__item-qty">{quantity}</p>
                </div>
                <div className="inventories-list__section">
                  <h4 className="inventories-list__section-title">Warehouse</h4>
                  <p className="inventories-list__item-warehouse">
                    {warehouse_name}
                  </p>
                </div>
                <div className="inventories-list__section">
                  <h4 className="inventories-list__section-title">Actions</h4>
                  <div className="inventories-list__actions">
                    <Link to={`/inventory/${id}/delete`}>
                      <img
                        src={deleteIcon}
                        alt="delete icon"
                        className="inventories-list__delete-icon"
                      />
                    </Link>
                    <Link to={`/inventory/${id}/edit`}>
                      <img
                        src={editIcon}
                        alt="edit icon"
                        className="inventories-list__edit-icon"
                      />
                    </Link>
                  </div>
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
