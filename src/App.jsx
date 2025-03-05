import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
