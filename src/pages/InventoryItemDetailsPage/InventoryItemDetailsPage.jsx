import "./InventoryItemDetailsPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import InventoryItemDetails from "../../components/InventoryItemDetails/InventoryItemDetails";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function InventoryItemDetailsPage() {
  const { id } = useParams();
  const [inventoryItemDetails, setInventoryItemDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const getInventoryItemById = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/inventories/${id}`);
      setInventoryItemDetails(response.data);
      console.log(response.data);
    } catch (err) {
      console.error("Error getting inventory item details", err);
    }
  };

  useEffect(() => {
    if (id) {
      getInventoryItemById();
    }
  }, [id]);

  useEffect(() => {
    if (inventoryItemDetails) {
      setLoading(false);
    }
  }, [inventoryItemDetails]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <InventoryItemDetails inventoryItemDetails={inventoryItemDetails} />;
    </>
  );
}

export default InventoryItemDetailsPage;
