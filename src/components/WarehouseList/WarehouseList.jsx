import "./WarehouseList.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import chevronIcon from "../../assets/icons/chevron-right-24px.svg";
import deleteIcon from "../../assets/icons/delete-outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function WarehouseList({ warehousesData }) {
  return (
    <section className="warehouse-list">
      <div className="warehouse-list__top-container">
        <h1 className="warehouse-list__title">Warehouses</h1>
        <div className="warehouse-list__search">
          <input
            className="warehouse-list__search-input"
            name="searchInput"
            type="text"
            placeholder="Search..."
          />
          <img
            className="warehouse-list__search-icon"
            src={searchIcon}
            alt="search icon"
          />
        </div>
        <div className="warehouse-list__button-container">
          <button className="warehouse-list__button">
            + Add New Warehouse
          </button>
        </div>
      </div>
      <section className="warehouse-list__header">
        <div className="warehouse-list__header-item">
          <h4 className="warehouse-list__header-title">Warehouse</h4>
          <img
            className="warehouse-list__sort-icon"
            src={sortIcon}
            alt="sort icon"
          />
        </div>
        <div className="warehouse-list__header-item">
          <h4 className="warehouse-list__header-title">Address</h4>
          <img
            className="warehouse-list__sort-icon"
            src={sortIcon}
            alt="sort icon"
          />
        </div>
        <div className="warehouse-list__header-item">
          <h4 className="warehouse-list__header-title">Contact Name</h4>
          <img
            className="warehouse-list__sort-icon"
            src={sortIcon}
            alt="sort icon"
          />
        </div>
        <div className="warehouse-list__header-item">
          <h4 className="warehouse-list__header-title">Contact Information</h4>
          <img
            className="warehouse-list__sort-icon"
            src={sortIcon}
            alt="sort icon"
          />
        </div>
        <div className="warehouse-list__header-item">
          <h4 className="warehouse-list__header-title">Actions</h4>
        </div>
      </section>
      <ul className="warehouse-list__items">
        {warehousesData.map(
          ({
            id,
            warehouse_name,
            address,
            city,
            country,
            contact_name,
            contact_email,
            contact_phone,
          }) => (
            <li key={id} className="warehouse-list__item">
              <div className="warehouse-list__info">
                <div className="warehouse-list__section">
                  <h4 className="warehouse-list__section-title">Warehouse</h4>
                  <div className="warehouse-list__warehouse-container">
                    <h3 className="warehouse-list__warehouse-name">
                      {warehouse_name}
                    </h3>
                    <img
                      className="warehouse-list__warehouse-icon"
                      src={chevronIcon}
                      alt="chevron icon"
                    />
                  </div>
                </div>
                <div className="warehouse-list__section">
                  <h4 className="warehouse-list__section-title">
                    Contact Name
                  </h4>
                  <p className="warehouse-list__contact-name">{contact_name}</p>
                </div>
                <div className="warehouse-list__section">
                  <h4 className="warehouse-list__section-title">Address</h4>
                  <p className="warehouse-list__address">{`${address}, ${city}, ${country}`}</p>
                </div>
                <div className="warehouse-list__section">
                  <h4 className="warehouse-list__section-title">
                    Contact Information
                  </h4>
                  <p className="warehouse-list__contact-phone">
                    {contact_phone}
                  </p>
                  <p className="warehouse-list__contact-email">
                    {contact_email}
                  </p>
                </div>
              </div>
              <div className="warehouse-list__actions">
                <img
                  className="warehouse-list__delete-icon"
                  src={deleteIcon}
                  alt="delete icon"
                />
                <img
                  className="warehouse-list__edit-icon"
                  src={editIcon}
                  alt="edit icon"
                />
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export default WarehouseList;
