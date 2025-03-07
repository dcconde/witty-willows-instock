import React from "react";
import { useNavigate, useParams } from "react-router-dom";
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
      const record = await fetch(
        `http://localhost:8080/api/inventories/${numericId}`
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
    <div className="card">
      <section className="deleteinventory">
        <img src={Close} alt="Close Icon" className="deleteinventory__img" />
        <h1 className="deleteinventory__h1">Delete Inventory Item?</h1>
        <p className="deleteinventory__p">
          Please confirm that you’d like to delete this inventory item. You
          won’t be able to undo this action.
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






