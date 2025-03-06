import "./WarehousesList.scss";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/icons/search-24px.svg";
import TableHeader from "../TableHeader/TableHeader";
import chevronIcon from "../../assets/icons/chevron-right-24px.svg";
import deleteIcon from "../../assets/icons/delete-outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function WarehousesList({ warehousesData }) {
  const headerItems = [
    "Warehouse",
    "Address",
    "Contact Name",
    "Contact Information",
    "Actions",
  ];

  return (
    <section className="warehouses-list">
      <div className="warehouses-list__top-container">
        <h1 className="warehouses-list__title">Warehouses</h1>
        <div className="warehouses-list__search">
          <input
            className="warehouses-list__search-input"
            name="searchInput"
            type="text"
            placeholder="Search..."
          />
          <img
            className="warehouses-list__search-icon"
            src={searchIcon}
            alt="search icon"
          />
        </div>
        <div className="warehouses-list__button-container">
          <button className="warehouses-list__button">
            + Add New Warehouse
          </button>
        </div>
      </div>
      <TableHeader headerItems={headerItems} />
      <ul className="warehouses-list__items">
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
            <li key={id} className="warehouses-list__item">
              <div className="warehouses-list__info">
                <div className="warehouses-list__section">
                  <h4 className="warehouses-list__section-title">Warehouse</h4>
                  <div className="warehouses-list__warehouse-container">
                    <Link
                      to={`/api/warehouses/${id}/inventories`}
                      className="warehouses-list__link"
                    >
                      <h3 className="warehouses-list__warehouse-name">
                        {warehouse_name}
                      </h3>
                    </Link>
                    <img
                      className="warehouses-list__warehouse-icon"
                      src={chevronIcon}
                      alt="chevron icon"
                    />
                  </div>
                </div>
                <div className="warehouses-list__section">
                  <h4 className="warehouses-list__section-title">
                    Contact Name
                  </h4>
                  <p className="warehouses-list__contact-name">
                    {contact_name}
                  </p>
                </div>
                <div className="warehouses-list__section">
                  <h4 className="warehouses-list__section-title">Address</h4>
                  <p className="warehouses-list__address">{`${address}, ${city}, ${country}`}</p>
                </div>
                <div className="warehouses-list__section">
                  <h4 className="warehouses-list__section-title">
                    Contact Information
                  </h4>
                  <p className="warehouses-list__contact-phone">
                    {contact_phone}
                  </p>
                  <p className="warehouses-list__contact-email">
                    {contact_email}
                  </p>
                </div>
              </div>
              <div className="warehouses-list__actions">
                <img
                  className="warehouses-list__delete-icon"
                  src={deleteIcon}
                  alt="delete icon"
                />
                <img
                  className="warehouses-list__edit-icon"
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

export default WarehousesList;
