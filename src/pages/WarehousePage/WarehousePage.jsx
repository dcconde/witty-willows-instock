import "./WarehousePage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import WarehouseList from "../../components/WarehouseList/WarehouseList";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
console.log(backendUrl);

function WarehousePage() {
  const [warehousesData, setWarehousesData] = useState([]);

  const getWarehouses = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/warehouses`);
      setWarehousesData(response.data);
    } catch (err) {
      console.error("Error getting warehouses", err);
    }
  };

  useEffect(() => {
    getWarehouses();
  }, []);

  return (
    <>
      <WarehouseList warehousesData={warehousesData} />
    </>
  );
}

export default WarehousePage;
