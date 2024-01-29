import React from "react";
import Navbar, { Footer } from "../../../../common/NavBar/Navbar";
import {
  PaymentStatus,
  SidebySideDiv,
} from "../../../../common/PaymentScreen/PaymentScreenStyles";
import Sidebar from "../../../../common/Sidebar/Sidebar";
import { ButtonStyles } from "../../../../common/Styles/Styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

const PaymentsSuccess = (props) => {
  const pmtDetails = useSelector((state) => state.pmnts);
  const navigate = useNavigate();
  const location = useLocation();

  const { state } = location;
  return (
    <>
      <Navbar />
      <SidebySideDiv>
        <Sidebar to="Payment" />
        <>
          <table>
            <PaymentStatus pmntStatus={state.status}>
              {state.status === "pass" ? (
                <TiTick size="30px" />
              ) : (
                <RxCross2 size="30px" />
              )}
              {state?.message}
            </PaymentStatus>

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
              alignItems: "flex-start",
              margin: "-8px 10px 10px 1%",
              gap: "10px",
              width: "20%",
            }}
          >
            <ButtonStyles
              style={{
                backgroundColor: "transparent",
                borderStyle: "solid",
              }}
              onClick={() => navigate("/home")}
            >
              Home
            </ButtonStyles>
            <ButtonStyles onClick={() => navigate("/payments")}>
              New Payment
            </ButtonStyles>
          </div>
        </>
      </SidebySideDiv>
      <Footer />
    </>
  );
};
export default PaymentsSuccess;
