import { useState, useEffect } from "react";
import axios from "axios";
import "./DeleteInventory.scss";
import Close from "../../assets/icons/close-24px.svg";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const DeleteInventory = ({ id, setShowModule }) => {
  const [inventoryItem, setInventoryItem] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchInventoryItem = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/inventories/${id}`);
      setInventoryItem(response.data.item_name);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching inventory item details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventoryItem();
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
      setShowModule(false);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error("Inventory item not found on DELETE");
      } else {
        console.error("Error deleting inventory item:", error.message);
      }
    }
  };

  const handleCancel = () => {
    setShowModule(false);
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
            {loading ? "Loading..." : `Delete ${inventoryItem} inventory item?`}
          </h1>
          <p className="deleteinventory__description">
            {loading ? (
              "Loading..."
            ) : (
              <>
                Please confirm that you’d like to delete {inventoryItem} from
                the inventory list.
                <br />
                You won’t be able to undo this action.
              </>
            )}
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
            disabled={loading}
          >
            Delete
          </button>
        </section>
      </section>
    </section>
  );
};

export default DeleteInventory;
