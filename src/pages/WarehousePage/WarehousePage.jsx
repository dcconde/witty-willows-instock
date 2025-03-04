import "./WarehousePage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function WarehousePage() {
  return (
    <>
      <WarehouseList />
    </>
  );
}

export default WarehousePage;
