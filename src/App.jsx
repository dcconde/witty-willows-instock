import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import footer from "./components/footer/footer";
import Header from "./components/Header/header";
import WarehouseAddPage from "./pages/WarehouseAddPage/WarehouseAddPage";
import WarehouseEditPage from "./pages/WarehouseEditPage/WarehouseEditPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route path="/api/warehouses/:id" element={<WarehouseDetailsPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route
          path="/api/warehouses/:warehouseId/add"
          element={<WarehouseAddPage />}
        ></Route>
        <Route
          path="/api/warehouses/:warehouseId/edit"
          element={<WarehouseEditPage />}
        ></Route>
      </Routes>
      <footer />
    </BrowserRouter>
  );
}

export default App;
