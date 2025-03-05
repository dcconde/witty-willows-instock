import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehouseAddPage from "./pages/WarehouseAddPage/WarehouseAddPage";
import WarehouseEditPage from "./pages/WarehouseEditPage/WarehouseEditPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<WarehousePage />} />
				<Route path="/inventory" element={<InventoryPage />} />
				<Route
					path="/warehouse/:warehouseId/add"
					element={<WarehouseAddPage />}
				></Route>
				<Route
					path="/warehouse/:warehouseId/edit"
					element={<WarehouseEditPage />}
				></Route>
				<></>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
