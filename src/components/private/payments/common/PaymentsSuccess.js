import React from "react";
import Navbar, { Footer } from "../../../../common/NavBar/Navbar";
import { SidebySideDiv } from "../../../../common/PaymentScreen/PaymentScreenStyles";
import Sidebar from "../../../../common/Sidebar/Sidebar";
import { ButtonStyles } from "../../../../common/Styles/Styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PaymentsSuccess = (props) => {
  const pmtDetails = useSelector((state) => state.pmnts);

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <SidebySideDiv>
        <Sidebar to="Payment" />
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
              <th>Message</th>
              <td>{pmtDetails?.message || "Not provided"}</td>
            </tr>
            <tr>
              <th>Amount</th>
              <td>{pmtDetails?.amount}</td>
            </tr>
          </tbody>
        </table>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            margin: "-8px 10px 10px 10%",
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
          <ButtonStyles onClick={() => navigate("/payments/success")}>
            Continue
          </ButtonStyles>
        </div>
      </SidebySideDiv>
      <Footer />
    </>
  );
};
export default PaymentsSuccess;
