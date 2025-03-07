import React from "react";
import { useParams } from "react-router-dom";
import WarehouseModify from "../../components/WarehouseModify/WarehouseModify";
import "./WarehouseEditPage.scss";

const WarehouseEditPage = () => {
	const { warehouseId } = useParams();
	const pathToWarehouseInventoriesPage = `/api/warehouses/${warehouseId}}/inventories`;
	return (
		<main>
			<WarehouseModify
				pageTitle="Edit Warehouse"
				endingPath={pathToWarehouseInventoriesPage}
				formSubmitBtnText="Save"
				requestType="put"
			/>
		</main>
	);
};

export default WarehouseEditPage;
