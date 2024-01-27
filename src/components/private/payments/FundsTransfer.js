import React, { useState } from "react";
import {
  AccountList,
  InputSelectAccount,
  PaymentButtons,
  PaymentsButtonsDiv,
} from "../../../common/PaymentScreen/PaymentScreenStyles";
import { useNavigate } from "react-router-dom";
import FromAccountSelector from "./common/FromAccountSelector";

const FundsTransfer = () => {
  const navigate = useNavigate();
  const [isFromClicked, setIsFromCLicked] = useState(false);
  const cancelHandle = () => {
    navigate("/payments");
  };

  const accountClickHandler = () => {
    setIsFromCLicked((prev) => !prev);
  };
  return (
    <>
      <div style={{ flex: 1 }}>
        <AccountList
          placeholder="Select from account"
          onClick={accountClickHandler}
        />
        {isFromClicked && <FromAccountSelector />}
        <InputSelectAccount placeholder="Select to account" />
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
