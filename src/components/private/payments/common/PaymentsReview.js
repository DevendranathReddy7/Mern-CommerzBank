import React from "react";
import { useSelector } from "react-redux";
import { ButtonStyles } from "../../../../common/Styles/Styles";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentsReview = () => {
  const pmtDetails = useSelector((state) => state.pmnts);
  const currentUser = useSelector((state) => state.login);
  const navigate = useNavigate();
  const path = useLocation().pathname;
  let endpoint = "";
  console.log(currentUser);
  switch (path) {
    case "/payments/funds-transfer-review":
      endpoint = "funds-transfer";
      break;
    default:
      endpoint = "";
  }

  const continueHandler = async () => {
    const response = await fetch(`http://localhost:5000/payments/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fromAccount: pmtDetails.fromAccount.accountNumber,
        toAccount: pmtDetails.toAccount.accountNumber,
        amount: pmtDetails.amount,
        message: pmtDetails.message,
        owner: currentUser.currentUser,
      }),
    });
    console.log(response);
    navigate("/payments/success");
  };
  return (
    <>
      <table>
        <tbody>
          <tr style={{ fontWeight: "bold" }}>
            <th> Payment Details</th>
            <th>From</th>
            <th>To</th>
          </tr>
          <tr>
            <th>Account Name</th>
            <td>{pmtDetails?.fromAccount?.accountName}</td>
            <td>{pmtDetails?.toAccount?.accountName}</td>
          </tr>
          <tr>
            <th>Account Number</th>
            <td>{pmtDetails?.fromAccount?.accountNumber}</td>
            <td>{pmtDetails?.toAccount?.accountNumber}</td>
          </tr>
          <tr>
            <th>Amount</th>
            <td>{pmtDetails?.amount}</td>
          </tr>
          <tr>
            <th>Message</th>
            <td>{pmtDetails?.message || "Not provided"}</td>
          </tr>
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          margin: "-8px 10px 50px 10%",
          gap: "10px",
          width: "20%",
        }}
      >
        <ButtonStyles
          style={{
            backgroundColor: "transparent",
            borderStyle: "solid",
          }}
          onClick={() => navigate(-1)}
        >
          Cancel
        </ButtonStyles>
        <ButtonStyles onClick={continueHandler}>Continue</ButtonStyles>
      </div>
    </>
  );
};
export default PaymentsReview;
