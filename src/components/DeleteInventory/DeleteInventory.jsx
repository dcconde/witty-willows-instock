import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./DeleteInventory.scss";
import Close from "../../assets/icons/close-24px.svg";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const DeleteInventory = ({ setShowModule }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [warehouseName, setWarehouseName] = useState("");

  useEffect(() => {
    const fetchWarehouse = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/warehouses/${id}`);
        setWarehouseName(response.data.warehouse_name);
      } catch (error) {
        console.error("Error fetching warehouse details:", error);
      }
    };
    fetchWarehouse();
  }, [id]);

  const handleDelete = async () => {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      console.error("Invalid ID format.");
      return;
    }
    try {
      await axios.delete(`${backendUrl}/api/inventories/${numericId}`);
      console.log("Successfully deleted inventory item with id:", numericId);
      navigate("/inventory");
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
    <section className="deleteinventory-overlay">
      <section className="deleteinventory">
        <img
          src={Close}
          alt="Close Icon"
          className="deleteinventory__img"
          onClick={handleCancel}
        />
        <section className="deleteinventory__content">
          <h1 className="deleteinventory__title">
            Delete {warehouseName || "this"} warehouse?
          </h1>
          <p className="deleteinventory__description">
            Please confirm that you’d like to delete {warehouseName || "this warehouse"} from
            the warehouse list. You won’t be able to undo this action.
          </p>
        </section>

        <section className="deleteinventory__buttons">
          <button
            className="deleteinventory__btn deleteinventory__btn--cancel"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="deleteinventory__btn deleteinventory__btn--delete"
            onClick={handleDelete}
          >
            Delete
          </button>
        </section>
      </section>
    </section>
  );
};

export default DeleteInventory;
