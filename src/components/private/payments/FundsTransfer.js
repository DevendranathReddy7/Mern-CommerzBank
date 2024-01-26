import React from "react";
import {
  InputSelectAccount,
  PaymentButtons,
  PaymentsButtonsDiv,
} from "../../../common/PaymentScreen/PaymentScreenStyles";
import { useNavigate } from "react-router-dom";

const FundsTransfer = () => {
  const navigate = useNavigate();
  const cancelHandle = () => {
    navigate("/payments");
  };

  const clickHandler = () => {
    console.log("i am clicked");
  };
  return (
    <>
      <div style={{ flex: 1 }}>
        <InputSelectAccount placeholder="Select from account" />
        <InputSelectAccount
          placeholder="Select to account"
          onClick={clickHandler}
        />
        <InputSelectAccount placeholder="Message" />
        <InputSelectAccount placeholder="Amount" />
        <PaymentsButtonsDiv>
          <PaymentButtons cancel onClick={cancelHandle}>
            Cancel
          </PaymentButtons>
          <PaymentButtons>Continue</PaymentButtons>
        </PaymentsButtonsDiv>
      </div>
    </>
  );
};
export default FundsTransfer;
