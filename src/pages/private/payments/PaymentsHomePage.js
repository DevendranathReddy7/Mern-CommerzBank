import React from "react";
import Navbar, { Footer } from "../../../common/NavBar/Navbar";
import Sidebar from "../../../common/Sidebar/Sidebar";

const PaymentsHomePage = (props) => {
  return (
    <div>
      <Navbar title="Payments" />
      <Sidebar />
      <Footer />
    </div>
  );
};
export default PaymentsHomePage;
