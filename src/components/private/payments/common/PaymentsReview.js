import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ButtonStyles } from "../../../../common/Styles/Styles";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../../../common/loading/Loader";

const PaymentsReview = () => {
  const pmtDetails = useSelector((state) => state.pmnts);
  const currentUser = useSelector((state) => state.login);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;
  let endpoint = "";

  switch (path) {
    case "/payments/self-transfer-review":
      endpoint = "funds-transfer";
      break;
    default:
      endpoint = "";
  }

  const continueHandler = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:5000/payments/${endpoint}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fromAccount: pmtDetails.fromAccount.accountNumber,
            toAccount: pmtDetails.toAccount.accountNumber,
            amount: pmtDetails.amount,
            message: pmtDetails.message,
            owner: currentUser.currentUser,
          }),
        }
      );
      setIsLoading(false);
      if (response.ok) {
        navigate("/payments/status", {
          state: { status: "pass", message: "Payment Successful!" },
        });
      }
    } catch (err) {
      navigate("/payments/status", {
        state: { status: "fail", message: "Payment Failed!" },
      });
    }
  };
  return (
    <>
      {isLoading ? (
        <Loader message="Posting your Payment" />
      ) : (
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
              alignItems: "flex-start",
              margin: "-8px 10px 50px 1%",
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
      )}
    </>
  );
};
export default PaymentsReview;
