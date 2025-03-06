import axios from "axios";
import { useState } from "react";
import Close from "../../assets/icons/close-24px.svg";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const DeleteWarehouse = ({ warehouseName, warehouseId, setShowModule }) => {

  const deleteWarehouse = async (warehouseId) => {
    console.log("deleteWarehouse");
    try {
      const response = await axios.delete(`${backendUrl}/api/warehouses/${warehouseId}`); // Corrected backticks for the template string
      if (response.status === 200) {
        alert("Warehouse deleted successfully.");
        setShowModule(false); // Close the modal after successful deletion
      } else {
        throw new Error("Error deleting warehouse.");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Failed to delete warehouse. Please try again later.");
    }
  };

  return (
    <section className="deletewarehouse">
      <img
        src={Close}
        alt="Close Icon"
        className="deletewarehouse__img"
        onClick={() => setShowModule(false)} // Close the modal when clicking the close icon
      />
      <section className="deletewarehouse__content">
        <h1 className="deletewarehouse__title">
          Delete {warehouseName} warehouse?
        </h1>
        <p className="deletewarehouse__description">
          Please confirm that you’d like to delete {warehouseName} from the warehouse list. You won’t be able to undo this action.
        </p>
      </section>

      <section className="deletewarehouse__buttons">
        <button
          className="deletewarehouse__btn deletewarehouse__btn--cancel"
          onClick={() => setShowModule(false)} // Close the modal when cancel is clicked
        >
          Cancel
        </button>
        <button
          className="deletewarehouse__btn deletewarehouse__btn--delete"
          onClick={() => deleteWarehouse(warehouseId)} // Delete warehouse when clicked
        >
          Delete
        </button>
      </section>
    </section>
  );
};

export default DeleteWarehouse;
