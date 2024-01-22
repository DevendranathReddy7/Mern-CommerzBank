import React from "react";
import Navbar, { Footer } from "../../../common/NavBar/Navbar";
import Sidebar from "../../../common/Sidebar/Sidebar";

const payment = [
  { path: "/payments/funds-transfer", name: "Funds Transfer" },
  { path: "/payments/bill-payments", name: "Bill Payments" },
  { path: "/payments/pay-any-one", name: "Pay Any One" },
];
const PaymentsHomePage = (props) => {
  return (
    <div>
      <Navbar title="Payments" />
      <Sidebar to={payment} />
      <Footer />
    </div>
  );
};
export default PaymentsHomePage;
