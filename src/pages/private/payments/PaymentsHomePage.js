import React from "react";
import Navbar, { Footer } from "../../../common/NavBar/Navbar";
import Sidebar from "../../../common/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const PaymentsHomePage = (props) => {
  return (
    <div>
      <Navbar title="Payments" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Sidebar to="Payment" />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default PaymentsHomePage;
