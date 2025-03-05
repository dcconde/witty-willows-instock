import "./WarehouseDetailsPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function WarehouseDetailsPage() {
  const { id } = useParams();
  const [warehouseDetails, setWarehouseDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const getWarehouseById = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/warehouses/${id}`);
      setWarehouseDetails(response.data);
    } catch (err) {
      console.error("Error getting warehouse details", err);
    }
  };

  useEffect(() => {
    if (id) {
      getWarehouseById();
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

  return <>{/* <h2>{warehouseDetails.warehouse_name}</h2> */}</>;
}

export default WarehouseDetailsPage;
