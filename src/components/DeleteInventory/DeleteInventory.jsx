import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./DeleteInventory.scss";
import Close from "../../assets/icons/close-24px.svg";

function DeleteInventory() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("DeleteInventory component received id:", id);

  const handleDelete = async () => {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      console.error("Invalid ID format.");
      return;
    }
    try {
      const getResponse = await axios.get(
        `http://localhost:8080/api/inventories/${numericId}`
      );
      console.log("Record before deletion:", getResponse.data);
      const deleteResponse = await axios.delete(
        `http://localhost:8080/api/inventories/${numericId}`
      );
      if (deleteResponse.status === 204) {
        console.log("Successfully deleted inventory item with id:", numericId);
        navigate("/inventory");
      } else {
        console.error(
          "Unexpected response status on DELETE:",
          deleteResponse.status
        );
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error("Inventory item not found on DELETE");
      } else {
        console.error("Error deleting inventory item:", error.message);
      }
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="card">
      <section className="deleteinventory">
        <img src={Close} alt="Close Icon" className="deleteinventory__img" />
        <h1 className="deleteinventory__h1">Delete Inventory Item?</h1>
        <p className="deleteinventory__p">
          Please confirm that you'd like to delete this inventory item. You
          won't be able to undo this action.
        </p>
        <div className="deleteinventory__btn">
          <button className="deleteinventory__btn1" onClick={handleCancel}>
            Cancel
          </button>
          <button className="deleteinventory__btn2" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </section>
    </div>
  );
}
export default DeleteInventory;






