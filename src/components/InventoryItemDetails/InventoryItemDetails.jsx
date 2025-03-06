import { Link } from "react-router-dom";
import "./InventoryItemDetails.scss";
import Back from "../../assets/icons/arrow-back-24px.svg";
import Edit from "../../assets/icons/edit-white-24px.svg";

function InventoryItemDetails({
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
  return (
    <section className="item-details">
      <div className="item-details__header">
        <Link to={"/inventory"}>
          <img src={Back} alt="Back" className="item-details__header-back" />
        </Link>
        <h1 className="item-details__header-title">{item_name}</h1>
        <Link to={`/inventory/${id}/edit`}>
          <button className="item-details__header-button">
            <img src={Edit} alt="Edit" className="item-details__header-edit" />
            <p>Edit</p>
          </button>
        </Link>
      </div>

      <div className="item-details__body">
        <div className="item-details__body-left">
          <div className="item-details__body-section">
            <h4 className="item-details__label">Item Description:</h4>
            <p className="item-details__text">{description}</p>
            <h4 className="item-details__label">Category:</h4>
            <p className="item-details__text">{category}</p>
          </div>
        </div>
        <div className="item-details__body-right">
          <div className="item-details__body-section item-details__body-section--status">
            <div className="item-details__status-group">
              <h4 className="item-details__label">Status:</h4>
              <p className="item-details__text">{status}</p>
            </div>
            <div className="item-details__quantity-group">
              <h4 className="item-details__label">Quantity:</h4>
              <p className="item-details__text">{quantity} </p>
            </div>
          </div>

          <div className="item-details__body-section item-details__body-section--warehouse">
            <h4 className="item-details__label">Warehouse:</h4>
            <p className="item-details__text">{warehouse_name}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InventoryItemDetails;
