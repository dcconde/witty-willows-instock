import axios from "axios";
import { useState } from "react";
import Close from "../../assets/icons/close-24px.svg";
import "./DeleteWarehouse.scss";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const DeleteWarehouse = ({ warehouseName, warehouseId, setShowModule }) => {
  const deleteWarehouse = async (warehouseId) => {
    console.log("deleteWarehouse");
    try {
      const response = await axios.delete(
        `${backendUrl}/api/warehouses/${warehouseId}`
      );
      if (response.status === 204) {
        alert("Warehouse deleted successfully.");
        setShowModule(false);
      } else {
        throw new Error("Error deleting warehouse.");
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to delete warehouse. Please try again later."
      );
    }
  };

  return (
    <section className="card">
      <section className="deletewarehouse">
        <img
          src={Close}
          alt="Close Icon"
          className="deletewarehouse__img"
          onClick={() => setShowModule(false)}
        />
        <section className="deletewarehouse__content">
          <h1 className="deletewarehouse__title">
            Delete {warehouseName} warehouse?
          </h1>
          <p className="deletewarehouse__description">
            Please confirm that you’d like to delete the {warehouseName} from
            the warehouse list. You won’t be able to undo this action.
          </p>
        </section>

        <section className="deletewarehouse__buttons">
          <button
            className="deletewarehouse__btn deletewarehouse__btn--cancel"
            onClick={() => setShowModule(false)}
          >
            Cancel
          </button>
          <button
            className="deletewarehouse__btn deletewarehouse__btn--delete"
            onClick={() => deleteWarehouse(warehouseId)}
          >
            Delete
          </button>
        </section>
      </section>
    </section>
  );
};

export default DeleteWarehouse;
