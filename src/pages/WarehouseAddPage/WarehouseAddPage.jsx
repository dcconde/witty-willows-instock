import React from "react";
import WarehouseModify from "../../components/WarehouseModify/WarehouseModify";
import "./WarehouseAddPage.scss";

const { VITE_SERVER_URL, VITE_PORT } = import.meta.env;

const WarehouseAddPage = () => {
  const pathToWarehousesPage = "/";
  const requestUrl = `${VITE_SERVER_URL}:${VITE_PORT}/api/warehouses`;
  return (
    <main>
      <WarehouseModify
        pageTitle="Add New Warehouse"
        sectionLeftTitle="Warehouse Details"
        sectionRightTitle="Contact Details"
        exitPath={pathToWarehousesPage}
        formSubmitBtnText="+ Add Warehouse"
        requestType="post"
        requestUrl={requestUrl}
      />
    </main>
  );
};

export default WarehouseAddPage;
