import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./DeleteInventory.scss";
import Close from "../../assets/icons/close-24px.svg";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const DeleteInventory = ({ warehouseName, warehouseId, setShowModule }) => {
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
      const record = await fetch(
        `${backendUrl}/api/inventories/${numericId}`
      ).then((res) => {
        if (!res.ok) {
          throw new Error("Record not found before deletion.");
        }
        return res.json();
      });
      console.log("Record before deletion:", record);
      const response = await fetch(
        `http://localhost:8080/api/inventories/${numericId}`,
        {
          method: "DELETE",
        }
      );
      if (response.status === 204) {
        console.log("Successfully deleted inventory item with id:", numericId);
        navigate("/inventory");
      } else if (response.status === 404) {
        console.error("Inventory item not found on DELETE");
      } else {
        console.error(
          "Failed to delete inventory item, status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error deleting inventory item:", error);
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
            Delete {warehouseName} warehouse?
          </h1>
          <p className="deleteinventory__description">
            Please confirm that you’d like to delete the {warehouseName} from
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
