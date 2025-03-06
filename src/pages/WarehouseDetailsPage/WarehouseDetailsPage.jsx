import "./WarehouseDetailsPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function WarehouseDetailsPage() {
  const { id } = useParams();
  const [warehouseDetails, setWarehouseDetails] = useState(null);
  const [inventoriesData, setInventoriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getWarehouseById = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/warehouses/${id}`);
      setWarehouseDetails(response.data);
    } catch (err) {
      console.error("Error getting warehouse details", err);
    }
  };

  const getInventoriesByWarehouseId = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/warehouses/${id}/inventories`
      );
      setInventoriesData(response.data);
    } catch (err) {
      console.error("Error getting inventories for warehouse", err);
    }
  };

  useEffect(() => {
    if (id) {
      getWarehouseById();
      getInventoriesByWarehouseId();
    }
  }, [id]);

  useEffect(() => {
    if (warehouseDetails) {
      setLoading(false);
    }
  }, [warehouseDetails]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="warehouse-details-page">
      <WarehouseDetails
        warehouseDetails={warehouseDetails}
        inventoriesData={inventoriesData}
      />
    </main>
  );
}

export default WarehouseDetailsPage;
