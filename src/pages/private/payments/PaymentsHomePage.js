import React from "react";
import Navbar, { Footer } from "../../../common/NavBar/Navbar";
import Sidebar from "../../../common/Sidebar/Sidebar";

const PaymentsHomePage = (props) => {
  return (
    <div>
      <Navbar title="Payments" />
      <Sidebar to="Payment" />
      <Footer />
    </div>
  );
};
export default PaymentsHomePage;
