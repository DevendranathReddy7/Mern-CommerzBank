import React from "react";
import PaymentsHomePage from "./PaymentsHomePage";
import BillPayments from "../../../components/private/payments/BillPayments";

const BillPaymentsPage = (props) => {
  return (
    <div>
      <PaymentsHomePage />
      <h2>How are you?</h2>
      <BillPayments />
    </div>
  );
};
export default BillPaymentsPage;
