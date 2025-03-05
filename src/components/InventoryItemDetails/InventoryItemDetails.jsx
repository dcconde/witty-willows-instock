import "./InventoryItemDetails.scss";
import Back from "../../assets/icons/arrow-back-24px.svg";
import Edit from "../../assets/icons/edit-white-24px.svg";

function InventoryItemDetails() {
    return (
      <section className="itemdetails">
        <div className="itemdetails__header">
          <img
            src={Back}
            alt="Back"
            className="itemdetails__header-back"
          />
          <h1 className="itemdetails__header-title">Television</h1>
          <button className="itemdetails__header-button">
          <img
            src={Edit}
            alt="Edit"
            className="itemdetails__header-edit"
          />
          </button>
        </div>
  
        <div className="itemdetails__body">
          <div className="itemdetails__body-left">
          <div className="itemdetails__body-section">
            <h4 className="itemdetails__label">Item Description:</h4>
            <p className="itemdetails__text">
              This 50", 4K LED TV provides a crystal-clear picture and vivid
              colors.
            </p>
            <h4 className="itemdetails__label">Category:</h4>
            <p className="itemdetails__text">Electronics</p>
          </div>
          </div>
          <div className="itemdetails__body-right">
          <div className="itemdetails__body-section itemdetails__body-section--status">
            <div className="itemdetails__status-group" >
            <h4 className="itemdetails__label">Status:</h4>
            <p className="itemdetails__text">IN STOCK</p>
            </div>
            <div className="itemdetails__quantity-group" >
            <h4 className="itemdetails__label">Quantity:</h4>
            <p className="itemdetails__text">500</p>
            </div>
          </div>
  
          <div className="itemdetails__body-section itemdetails__body-section--warehouse">
            <h4 className="itemdetails__label">Warehouse:</h4>
            <p className="itemdetails__text">Manhattan</p>
          </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default InventoryItemDetails;
