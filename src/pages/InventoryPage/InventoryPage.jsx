import "./InventoryPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList.jsx";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function InventoryPage() {
  const [inventoriesData, setInventoriesData] = useState([]);

  const getInventories = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/inventories`);
      setInventoriesData(response.data);
    } catch (err) {
      console.error("Error getting inventories", err);
    }
  };

  useEffect(() => {
    getInventories();
  }, []);

  return (
    <>
      <InventoryList inventoriesData={inventoriesData} />
    </>
  );
}

export default InventoryPage;
