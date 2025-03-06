import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import Header from "./components/Header/header";
import WarehouseAddPage from "./pages/WarehouseAddPage/WarehouseAddPage";
import WarehouseEditPage from "./pages/WarehouseEditPage/WarehouseEditPage";
import DeleteInventory from "./components/DeleteInventory/DeleteInventory";
import InventoryItemDetailsPage from "./pages/InventoryItemDetailsPage/InventoryItemDetailsPage";
import EditInventoryItemPage from "./pages/EditInventoryItemPage/EditInventoryItemPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route path="/api/warehouses/:id" element={<WarehouseDetailsPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/deleteinventory" element={<DeleteInventory />} />
        <Route path="/inventory/:id" element={<InventoryItemDetailsPage />} />
        <Route path="/inventory/:id/edit" element={<EditInventoryItemPage />} />
        <Route
          path="/api/warehouses/:warehouseId/add"
          element={<WarehouseAddPage />}
        />
        <Route
          path="/api/warehouses/:warehouseId/edit"
          element={<WarehouseEditPage />}
        />
      </Routes>
      <footer />
    </BrowserRouter>
  );
}

export default App;
