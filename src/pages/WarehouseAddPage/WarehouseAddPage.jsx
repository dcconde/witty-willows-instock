import React from "react";
import WarehouseModify from "../../components/WarehouseModify/WarehouseModify";
import "./WarehouseAddPage";

const WarehouseAddPage = () => {
	const pathToWarehousesPage = "/";
	return (
		<main>
			<WarehouseModify
				pageTitle="Add New Warehouse"
				endingPath={pathToWarehousesPage}
				formSubmitBtnText="+ Add Warehouse"
				requestType="post"
			/>
		</main>
	);
};

export default WarehouseAddPage;
