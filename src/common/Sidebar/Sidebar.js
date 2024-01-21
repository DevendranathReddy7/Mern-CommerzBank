import React from "react";
import { DivSideBar, PaymentButtonStyle } from "../Styles/Styles";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <>
      <DivSideBar>
        <PaymentButtonStyle>
          <Link
            to="/payments/funds-transfer"
            style={{ textDecoration: "none", color: "#0fbfeb" }}
          >
            Funds Transfer
          </Link>
        </PaymentButtonStyle>
        <PaymentButtonStyle>
          <Link
            to="/payments/bill-payment"
            style={{ textDecoration: "none", color: "#0fbfeb" }}
          >
            Bill Payments
          </Link>
        </PaymentButtonStyle>
        <PaymentButtonStyle>
          <Link
            to="/payments/pay-any-one"
            style={{ textDecoration: "none", color: "#0fbfeb" }}
          >
            Pay Any One
          </Link>
        </PaymentButtonStyle>
      </DivSideBar>
    </>
  );
};
export default Sidebar;
