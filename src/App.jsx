import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import Header from "./components/Header/header";
import WarehouseAddPage from "./pages/WarehouseAddPage/WarehouseAddPage";
import WarehouseEditPage from "./pages/WarehouseEditPage/WarehouseEditPage";
import DeleteInventory from "./components/DeleteInventory/DeleteInventory";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import EditInventoryItem from "./components/EditInventoryItem/EditInventoryItem";
import Footer from "./components/Footer/Footer";
import InventoryAddPage from "./pages/InventoryAddPage/InventoryAddPage";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route
          path="/api/warehouses/:id/inventories"
          element={<WarehouseDetailsPage />}
        />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/deleteinventory" element={<DeleteInventory />} />
        <Route path="/editinventoryitem" element={<EditInventoryItem />} />
        <Route path="/addinventoryitem"  element={<InventoryAddPage />} />
        <Route
          path="/inventoryitemdetails"
          element={<InventoryItemDetails />}
        />
        <Route
          path="/api/warehouses/:warehouseId/add"
          element={<WarehouseAddPage />}
        ></Route>
        <Route
          path="/api/warehouses/:warehouseId/edit"
          element={<WarehouseEditPage />}
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
