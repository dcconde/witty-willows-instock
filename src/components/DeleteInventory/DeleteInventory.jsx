import "./DeleteInventory.scss";
import Close from "../../assets/icons/close-24px.svg";

function DeleteInventory() {
  return (
    <div className="card">
      <section className="deleteinventory">
        <img src={Close} alt="Close Icon" className="deleteinventory__img" />
        <h1 className="deleteinventory__h1">
          Delete Television inventory item?
        </h1>
        <p className="deleteinventory__p">
          Please confirm that you’d like to delete Television from the inventory
          list. You won’t be able to undo this action.
        </p>
        <div className="deleteinventory__btn">
          <button className="deleteinventory__btn1">Cancel</button>
          <button className="deleteinventory__btn2">Delete</button>
        </div>
      </section>
    </div>
  );
}

export default DeleteInventory;
